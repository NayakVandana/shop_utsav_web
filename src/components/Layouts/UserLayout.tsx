import { memo } from 'react';
import TopHeader from '../Header/TopHeader';
import Header from '../Header/Header';
import GuestFooter from '../Footer/GuestFooter';

const UserLayout = memo(function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopHeader />
      <Header />
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow bg-base-300">{children}</main>
        <GuestFooter />
      </div>
      <div id="calendaly" className="fixed bottom-4 right-4"></div>
    </>
  );
});

export default UserLayout;