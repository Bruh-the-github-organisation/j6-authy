import './globals.css'

export const metadata = {
  title: 'J6 Authy ' + process.env.ENVIRONMENT,
  description: 'J6 Authy ' + process.env.ENVIRONMENT + ' environment',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
