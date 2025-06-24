import React from "react";
import TopHeader from "../Header/TopHeader";
import Header from "../Header/Header";
import GuestFooter from "../Footer/GuestFooter";
import AdminSidebar from "../SideBaar/AdminSidebar";

export default function AdminLayout({ children }: any) {
    return<>
          <h1>AdminLayout</h1>
          <TopHeader />
          <Header />
          <AdminSidebar />
          <div className="flex flex-col min-h-screen">
            <main className="flex-grow">{children}</main>
            <GuestFooter />
          </div>
          <div id="calendaly"></div>
        </>
}
