import { getConfig, setConfig } from "@/utils/config";



export async function POST(request){
    const body = await request.json()
    const {username, password, sender} = body;
    
    // Save the email settings
    await setConfig('email:username', username);
    await setConfig('email:password', password);
    await setConfig('email:sender', sender);

    return {
        body: JSON.stringify({username, sender}),
        headers: {
            'Content-Type': 'application/json',
        },
    }
}

export async function GET(){
    const username = await getConfig('email:username');
    const sender = await getConfig('email:sender');
    return {
        body: JSON.stringify({username, sender}),
        headers: {
            'Content-Type': 'application/json',
        },
    }
}
