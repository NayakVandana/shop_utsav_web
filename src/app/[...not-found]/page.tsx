
//C:\wamp64\www\shop_utsav_frontend\src\app\[...not-found]\page.tsx

import AdminLayout from '@/components/Layouts/AdminLayout';
import AppLayout from '@/components/Layouts/AppLayout';
import GuestLayout from '@/components/Layouts/GuestLayout';
import { useAuthStore } from '@/ui/guest/Login/authStore';
import { isLoggedin } from '@/utils/isLoggedin';
import { useSession } from 'next-auth/react';
import Link from 'next/link'
import { usePathname } from 'next/navigation';

export default async function NotFound() {
    let isLogin = await isLoggedin();
    let Contatiner = isLogin ? AppLayout : GuestLayout;
    // const isAdminLoggedIn = useAuthStore((state: any) => state.isAdminLoggedIn);
    // const { data: session, status }: any = useSession();
    // const isAdmin = session?.user?.is_admin



    // const isAdminPath = isAdmin 
    // check here admin is loged in or not 
    if (false) {
        Contatiner = AdminLayout
    }

    return <Contatiner>
        <div className={isLogin ? " h-4/5 " : "h-screen "}>
            <div className="flex flex-col items-center justify-center w-full h-full" >
                <h1 className='text-9xl text-primary ' > 404 </h1>
                <h1 className='text-3xl' > Opps! Page Not found! </h1>
                <h2 className='mt-5' > The page you are looking for does not exist.</h2>
                {isLogin ? <Link className='mt-5 btn btn-ghost btn-lg' href="/dashboard" > Go back to Dashboard </Link> :
                    <Link className='mt-5 btn btn-ghost btn-lg' href="/" > Go back to Home </Link>}
            </div>
        </div>
    </Contatiner>
}