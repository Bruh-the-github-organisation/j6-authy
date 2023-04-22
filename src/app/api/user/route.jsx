// Import prisma client
import { prisma } from '@/app/utils/prisma'

// This is the user management route
// It is used to create, update, delete and get users

export async function GET(request) {
    // Get the id query parameter
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');


    // If the id is not set, return a 400 error
    if (!id) {
        return new Response('Missing id', { status: 400 })
    }

    // If the id is all (case insensitive), return all users
    if (id == 'all') {
        const users = await prisma.user.findMany()
        return new Response(JSON.stringify(users), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }

    // If the id is not all, return the user with the given id
    const user = await prisma.user.findUnique({
        where: {
            id: parseInt(id),
        },
    })

    // If the user is not found, return a 404 error
    if (!user) {
        return new Response('User not found', { status: 404 })
    }

    // Return the user
    return new Response(JSON.stringify(user), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    })

}

export async function POST(request) {
    // Get the body of the request
    const body = await request.json()

    // Create a new user
    const user = await prisma.user.create({
        data: {
            name: body.name,
            email: body.email,
        },
    })

    // Return the new user
    return new Response(JSON.stringify(user), {
        status: 201,
        headers: {
            'Content-Type': 'application/json',
        },
    })
}

export async function PUT(request) {
    // Get the body of the request
    const body = await request.json()

    // Update the user with the given id
    const user = await prisma.user.update({
        where: {
            id: parseInt(body.id),
        },
        data: {
            name: body.name,
            email: body.email,
        },
    })

    // Return the updated user
    return new Response(JSON.stringify(user), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    })
}

export async function DELETE(request) {
    // Get the id query parameter
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    // If the id is not set, return a 400 error
    if (!id) {
        return new Response('Missing id', { status: 400 })
    }

    // Delete the user with the given id
    const user = await prisma.user.delete({
        where: {
            id: parseInt(id),
        },
    })

    // Return the deleted user
    return new Response(JSON.stringify(user), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    })
}
