import { PrismaClient } from '@prisma/client'

export default async function Page() {

  const prisma = new PrismaClient()

  const {allUsers} = await prisma.user.findMany();

  return (
    <main>
      <p>MySql Server: {process.env.MYSQL_SERVER} </p>
      <p>MySql User: {process.env.MYSQL_USER} </p>
      <p>MySql Password: {process.env.MYSQL_PASSWORD} </p>
      <p>MySql Database: {process.env.MYSQL_DATABASE} </p>
      <p>CD Testing 3 (this better fucking work)</p>

      {/* List through the users by name */}
      <p>Users: {allUsers}</p>

    </main>
  )
}