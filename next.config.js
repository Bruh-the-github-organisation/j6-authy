/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    environment: process.env.ENVIRONMENT,
    mysql_server: process.env.MYSQL_SERVER,
    mysql_user: process.env.MYSQL_USER,
    mysql_password: process.env.MYSQL_PASSWORD,
    mysql_database: process.env.MYSQL_DATABASE
  }
}

module.exports = nextConfig
