import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import { getServerSession } from 'next-auth';
import Provider from '../Providers/ClientProvider';
import GuestLayout from '@/components/Layouts/GuestLayout';
import { isLoggedin } from '@/utils/isLoggedin';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import authOptions from '../api/auth/[...nextauth]/authOptions';
import { SpeedInsights } from '@vercel/speed-insights/next';
import UserLayout from '@/components/Layouts/UserLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | E-Commerce',
    default: 'Utsav',
  },
  description: 'E-Commerce,Marketplace',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  const isLogin = await isLoggedin();
  const Container = isLogin ? UserLayout : GuestLayout;
console.log("isLogin",isLogin);
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <Provider session={session}>
          <Container>{children}</Container>
        </Provider>
        <ToastContainer />
        <SpeedInsights />
      </body>
    </html>
  );
}