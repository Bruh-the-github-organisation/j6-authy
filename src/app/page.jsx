
export default async function Page() {

  return (
    <main>
      <p>MySql Server: {process.env.MYSQL_SERVER} </p>
      <p>MySql User: {process.env.MYSQL_USER} </p>
      <p>MySql Password: {process.env.MYSQL_PASSWORD} </p>
      <p>MySql Database: {process.env.MYSQL_DATABASE} </p>
      <p>CD Testing 3 (this better fucking work)</p>


    </main>
  )
}