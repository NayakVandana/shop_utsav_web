import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { getServerSession } from 'next-auth'
import Provider from '../Providers/ClientProvider'
import GuestLayout from '@/components/Layouts/GuestLayout'
import { isLoggedin } from '@/utils/isLoggedin'
import { ToastContainer } from 'react-toastify'
import authOptions from '../api/auth/[...nextauth]/authOptions'
// import { CommonHead } from '@/components/Header/CommonHead'
import { SpeedInsights } from "@vercel/speed-insights/next"
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | LegAn',
    default: 'LegAn',
  },
  description: 'Credit Management Simplified',
  // metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)
  return (
    <html lang="en" data-theme="light">
      <SpeedInsights/>
      {/* <CommonHead/> */}
      <body className={inter.className}>
        <Provider session={session}>
          <GuestLayout>
            {children}
          </GuestLayout>
        </Provider>
        <ToastContainer />
      </body>
    </html>
  )
}
