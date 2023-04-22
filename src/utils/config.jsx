/*
This file is used to handle the configuration of the application. It is used to store and retrieve the configuration from the mysql database.
*/
import { prisma } from '@/utils/prisma';

export async function getConfig(key){
    const config = await prisma.config.findUnique({
        where: {
            name: key
        }
    })
    return {key, config};
}

export async function setConfig(key, value){
    const config = await prisma.config.upsert({
        where: {
            name: key
        },
        update: {
            value
        },
        create: {
            name: key,
            value
        }
    })
    return {key, config};
}