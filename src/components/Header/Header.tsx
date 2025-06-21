'use client';

import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

export default function Header() {
  const { data: session } = useSession();

  return (
    <nav className="navbar bg-base-100 shadow">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">Shop Utsav</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="/products">Products</Link></li>
          <li><Link href="/categories">Categories</Link></li>
          {session ? (
            <>
              <li><Link href="/cart">Cart</Link></li>
              <li><Link href="/orders">Orders</Link></li>
              {session.user?.role === 'ADMIN' && <li><Link href="/admin/dashboard">Admin</Link></li>}
              <li><button onClick={() => signOut({ callbackUrl: '/' })}>Logout</button></li>
            </>
          ) : (
            <>
              <li><Link href="/login">Login</Link></li>
              <li><Link href="/register">Register</Link></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}