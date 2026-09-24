import { redis } from "../index.js";

const rateLimiter = async (req, res, next) => {
    const ip = req.ip;
    const key = `rate_limit:${ip}`;
    const value = await redis.incr(key);
    if (value === 1) {
        await redis.expire(key, 60);
    }
    if (value > 5) {
        return res.status(429).send('Too many requests');
    }
    next();
}

export default rateLimiter;