import { Queue } from "bullmq";
import { redis } from "./index.js";
import Redis from "ioredis";

const connection = new Redis("redis://localhost:6379", {
    lazyConnect: true,
    maxRetriesPerRequest: null
});

const emailQueue = new Queue("emailQueue", { connection });

export default emailQueue;