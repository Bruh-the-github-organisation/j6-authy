import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import getConfig from 'next/config'

const inter = Inter({ subsets: ['latin'] })



export async function getStaticProps() {
  const { publicRuntimeConfig: config } = getConfig()
  console.log('config:', JSON.stringify(config))
  return {
    props: {
      config,
    },
  }
}


export default function Home({ config }) {
  
  return (
    <>
      <Head>
        <title>J6 Authy</title>
        <meta name="description" content="J6 Authy Dev Environment" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>MySql Server: {config.mysql_server} </p>
        <p>MySql User: {config.mysql_user} </p>
        <p>MySql Password: {config.mysql_password} </p>
        <p>MySql Database: {config.mysql_database} </p>
        <p>CD Testing 3 (this better fucking work)</p>
      </main>
    </>
  )
}
