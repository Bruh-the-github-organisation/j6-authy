import {redis} from '@/utils/redis';



export async function POST(request){
    const body = await request.json()
    const {username, password, sender} = body;
    
    // Save the email settings
    await redis.set('email:username', username);
    await redis.set('email:password', password);
    await redis.set('email:sender', sender);
}

export async function GET(request){
    const username = await redis.get('email:username');
    const sender = await redis.get('email:sender');
    return {
        body: JSON.stringify({username, sender}),
        headers: {
            'Content-Type': 'application/json',
        },
    }
}
