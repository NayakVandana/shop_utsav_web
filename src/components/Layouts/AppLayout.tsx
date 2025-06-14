//C:\wamp64\www\shop_utsav_frontend\src\components\Layouts\AppLayout.tsx

import dynamic from 'next/dynamic';
import React, { Suspense, memo } from 'react';


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
    </>
  );
});

export default AppLayout;