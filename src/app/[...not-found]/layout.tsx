import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import authOptions from '../api/auth/[...nextauth]/authOptions'
import Provider from '../Providers/ClientProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Utsav',
  description: 'E-Commerce,Marketplace',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

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
