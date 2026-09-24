import express from "express";
import dotenv from "dotenv";
import connectDB from "./lib/db.js";
import userModel from "./model/user.model.js";
import Redis from "ioredis";
import rateLimiter from "./middleware/ratelimit.js";
import emailQueue from "./queue.js";

dotenv.config();

const app = express();

export const redis = new Redis(process.env.REDIS_URL, {
    lazyConnect: true,
    maxRetriesPerRequest: null
});

app.use(express.json());
const port = process.env.PORT || 5000;

app.listen(port, () => {
    connectDB();
    console.log(`Server running on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.post("/create", async (req, res) => {
    const { name, email, password } = req.body;
    const user = await userModel.create({
        name,
        email,
        password
    });
    if (user) {
        await redis.del('user:all');
        await emailQueue.add('send-email', { email });
        res.status(201).send(user);
    }
});

app.get("/users", async (req, res) => {
    const users = await userModel.find({});
    if (users) {
        return res.status(200).send(users);
    }
});

app.get('/all', rateLimiter, async (req, res) => {
    const cachedData = await redis.get('user:all');
    if (cachedData) {
        const data = JSON.parse(cachedData);
        return res.status(200).send(data);
    }
    const users = await userModel.find({});
    await redis.set('user:all', JSON.stringify(users));
    if (users) {
        return res.status(200).send(users);
    }
});

app.post('/generate-otp', async (req, res) => {
    const { email } = req.body;
    const otp = Math.floor(1000000 + Math.random() * 900000).toString();
    await redis.set(`otp:${email}`, otp, 'EX', 60);
    return res.status(200).send(otp);
});


app.post('/verify-otp', async (req, res) => {
    const { email, otp } = req.body;
    const storedOtp = await redis.get(`otp:${email}`);
    if (storedOtp === otp) {
        await redis.del(`otp:${email}`);
        return res.status(200).send('OTP verified');
    }
    return res.status(400).send('Invalid OTP');
})
