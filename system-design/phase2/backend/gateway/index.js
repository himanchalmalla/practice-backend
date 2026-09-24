import express from "express";
import dotenv from "dotenv";
import proxy from "express-http-proxy";

dotenv.config();

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});

app.use("/auth", proxy("http://auth-service:5000"));
app.use("/order", proxy("http://order-service:5001"));
app.use("/product", proxy("http://product-service:5002"));


app.get("/", (req, res) => {
    res.send(`Hello World From Server! ${process.env.GATEWAY_NAME}`);
});