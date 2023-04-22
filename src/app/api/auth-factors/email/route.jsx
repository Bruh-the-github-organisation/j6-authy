import { getConfig, setConfig } from "@/utils/config";



export async function POST(request){
    const body = await request.json()
    const {username, password, sender} = body;
    
    // Save the email settings
    await setConfig('email:username', username);
    await setConfig('email:password', password);
    await setConfig('email:sender', sender);
}

export async function GET(request){
    const username = await getConfig('email:username');
    const sender = await getConfig('email:sender');
    return {
        body: JSON.stringify({username, sender}),
        headers: {
            'Content-Type': 'application/json',
        },
    }
}
