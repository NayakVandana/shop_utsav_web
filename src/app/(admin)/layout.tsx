import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { getServerSession } from 'next-auth'
import Provider from '../Providers/ClientProvider'
import { isLoggedin } from '@/utils/isLoggedin'
import { ToastContainer } from 'react-toastify'
import { redirect } from 'next/navigation'
import authOptions from '../api/auth/[...nextauth]/authOptions'
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import AdminLayout from '@/components/Layouts/AdminLayout'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Utsav',
  description: 'THE UTSAV',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  let isLogin = await isLoggedin();
  if (!isLogin) {
    return redirect("/login");
  }



  const session = await getServerSession(authOptions)
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <Provider session={session}>
          <AdminLayout >
            {children}
          </AdminLayout>
        </Provider>
        <ToastContainer />
      </body>
    </html>
  )
}
