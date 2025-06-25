import React from 'react';
import TopHeader from '../Header/TopHeader';
import Header from '../Header/Header';
import GuestFooter from '../Footer/GuestFooter';
import AdminSidebar from '../SideBaar/AdminSidebar';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col min-h-screen">
        <TopHeader />
        <Header />
        <main className="flex-grow bg-base-300">{children}</main>
        <GuestFooter />
      </div>
      <div className="drawer-side z-30">
        <label htmlFor="my-drawer" className="drawer-overlay" aria-label="Close sidebar"></label>
        <AdminSidebar />
      </div>
      <div id="calendaly" className="fixed bottom-4 right-4"></div>
    </div>
  );
}