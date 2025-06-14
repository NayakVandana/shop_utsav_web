
//C:\wamp64\www\shop_utsav_frontend\src\app\[...not-found]\layout.tsx

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
// import Provider from '../Providers/ClientProvider'
import { getServerSession } from 'next-auth'

import { redirect } from 'next/navigation'
// import { isLoggedin } from '@/utils/isLoggedin'
import authOptions from '../api/auth/[...nextauth]/authOptions'
import Provider from '../Providers/ClientProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LegAn',
  description: 'Credit Management Simplified',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // let isLogin = await isLoggedin();
  // if (isLogin) {
  //   return redirect("/dashboard");
  // }

  const session = await getServerSession(authOptions)
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <Provider session={session}>
          {children}
        </Provider>
      </body>
    </html>
  )
}
