import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const port = process.env.PORT || 5000;

app.listen(process.env.PORT, () => {
    console.log(`Order service running at port ${port}`);
});

app.get("/", (req, res) => {
    res.send("Hello World From Auth!");
});
