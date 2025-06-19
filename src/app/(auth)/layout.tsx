import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { getServerSession } from 'next-auth'
import Provider from '../Providers/ClientProvider'
import { ToastContainer } from 'react-toastify'
import authOptions from '../api/auth/[...nextauth]/authOptions'
import Head from 'next/head'

// import { CommonHead } from '@/components/Header/CommonHead'
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LegAn',
  description: 'THE FAITH',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  return (
    <html lang="en" data-theme="light">
      {/* <CommonHead/> */}
      <SpeedInsights/>
      <Head>
        <meta charset="utf-8" />
        <meta name="robots" content="all" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <body className={inter.className}>
        <Provider session={session}>
          {children}
        </Provider>
        <ToastContainer />
      </body>

   
    </html>
  )
}
