import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const port = process.env.PORT || 5002;

app.listen(port, () => {
    console.log(`Product service running at port ${port}`);
});

app.get("/", (req, res) => {
    res.send("Hello World From Product!");
});
