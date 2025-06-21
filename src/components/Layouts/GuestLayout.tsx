//C:\wamp64\www\shop_utsav_frontend\src\components\Layouts\GuestLayout.tsx

// import GuestFooter from "../Footer/GuestFooter";
// import Header from "../Header/Header";
// import TopHeader from "../Header/TopHeader";

export default function GuestLayout({ children }: any) {
    // const router = useRouter();
    // const showHeader = router.pathname === '/login' ? false : true;
    return <>
    {/* <TopHeader/> */}
        {/* <Header /> */}
        <div className="flex flex-col min-h-screen">
            <h1>GuestLayout</h1>
            <main className="flex-grow ">
                {children}
            </main>
            {/* <GuestFooter /> */}
        </div>
        <div id="calendaly"></div>
    </>



}