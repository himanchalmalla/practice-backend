import { Worker } from "bullmq";
import sendEmail from "./lib/sendEmail.js";
import Redis from "ioredis";

const connection = new Redis("redis://localhost:6379", {
    maxRetriesPerRequest: null
});

const worker = new Worker("emailQueue", async (job) => {
    console.log("Job started");
    const email = job.data.email;
    await sendEmail(email);
    console.log("Job completed");
}, { connection });

export default worker;