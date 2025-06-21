//C:\wamp64\www\shop_utsav_frontend\src\components\Layouts\AppLayout.tsx

import dynamic from 'next/dynamic';
import React, { Suspense, memo } from 'react';
import TopHeader from '../Header/TopHeader';
import Header from '../Header/Header';
import GuestFooter from '../Footer/GuestFooter';


const LoadingPlaceholder = memo(() => <div className="w-full h-screen bg-gray-200 animate-pulse"></div>);
LoadingPlaceholder.displayName = 'LoadingPlaceholder';

const Modals = memo(() => (
  <>
   
  </>
));
Modals.displayName = 'Modals';


const AppLayout = memo(function AppLayout({ children }) {
  return (
     <>
      <h1>AppLayout</h1>
      <TopHeader />
      <Header />
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">{children}</main>
        <GuestFooter />
      </div>
      <div id="calendaly"></div>
    </>
  );
});

export default AppLayout;