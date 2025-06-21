import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import { getServerSession } from 'next-auth';
import Provider from '../Providers/ClientProvider';
import GuestLayout from '@/components/Layouts/GuestLayout';
import AppLayout from '@/components/Layouts/AppLayout'; // Added missing import
import { isLoggedin } from '@/utils/isLoggedin';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Added required CSS for ToastContainer
import authOptions from '../api/auth/[...nextauth]/authOptions';
// import { CommonHead } from '@/components/Header/CommonHead';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | LegAn',
    default: 'LegAn',
  },
  description: 'Credit Management Simplified',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  const isLogin = await isLoggedin();
  const Container = isLogin ? AppLayout : GuestLayout;

  return (
    <html lang="en" data-theme="light">
      {/* <head>
        <CommonHead />
      </head> */}
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