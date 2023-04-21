import Redis from 'ioredis';


const config = {
    host: process.env.REDIS_HOST,
    port: 6379,
  }

export function createRedisClient() {
    try{
        const options = {
            ...config,
            showFriendlyErrorStack: true,
            enableAutoPipelining: true,
            maxRetriesPerRequest: 0,
            retryStrategy: (times) => {
                if (times > 3) {
                throw new Error(`[Redis] Could not connect after ${times} attempts`);
                }
    
                return Math.min(times * 200, 1000);
            },
        }
    
        const redis = new Redis(options);
        redis.on('error', (err) => {
            console.error(`[Redis] Error: ${err.message}`);
        });
    }
    catch(err){
        console.error(`[Redis] Error: ${err.message}`);
    }
}
