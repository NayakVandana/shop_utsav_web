'use client';

import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const { data: session } = useSession();
  const pathname = usePathname();

  return (
    <nav className="navbar bg-base-100 shadow">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">Shop Utsav</Link>
      </div>
      <div className="flex-none">
        {/* Desktop Menu */}
        <ul className="menu menu-horizontal px-1 hidden lg:flex">
          <li>
            <Link href="/products" aria-current={pathname === '/products' ? 'page' : undefined}>
              Products
            </Link>
          </li>
          <li>
            <Link href="/categories" aria-current={pathname === '/categories' ? 'page' : undefined}>
              Categories
            </Link>
          </li>
          {session ? (
            <>
              <li>
                <Link href="/cart" aria-current={pathname === '/cart' ? 'page' : undefined}>
                  Cart
                </Link>
              </li>
              <li>
                <Link href="/orders" aria-current={pathname === '/orders' ? 'page' : undefined}>
                  Orders
                </Link>
              </li>
              {session.user?.role === 'ADMIN' && (
                <li>
                  <Link href="/admin/dashboard" aria-current={pathname === '/admin/dashboard' ? 'page' : undefined}>
                    Admin
                  </Link>
                </li>
              )}
              <li>
                <button className="btn btn-ghost" onClick={() => signOut({ callbackUrl: '/' })}>
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/login" aria-current={pathname === '/login' ? 'page' : undefined}>
                  Login
                </Link>
              </li>
              <li>
                <Link href="/register" aria-current={pathname === '/register' ? 'page' : undefined}>
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <label htmlFor="mobile-drawer" className="btn btn-ghost" aria-label="Open menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
        </div>
      </div>
      {/* Mobile Drawer */}
      <input id="mobile-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side z-40">
        <label htmlFor="mobile-drawer" className="drawer-overlay" aria-label="Close menu"></label>
        <ul className="menu p-4 w-64 bg-base-100 min-h-screen">
          <li>
            <Link href="/products" aria-current={pathname === '/products' ? 'page' : undefined}>
              Products
            </Link>
          </li>
          <li>
            <Link href="/categories" aria-current={pathname === '/categories' ? 'page' : undefined}>
              Categories
            </Link>
          </li>
          {session ? (
            <>
              <li>
                <Link href="/cart" aria-current={pathname === '/cart' ? 'page' : undefined}>
                  Cart
                </Link>
              </li>
              <li>
                <Link href="/orders" aria-current={pathname === '/orders' ? 'page' : undefined}>
                  Orders
                </Link>
              </li>
              {session.user?.role === 'ADMIN' && (
                <li>
                  <Link href="/admin/dashboard" aria-current={pathname === '/admin/dashboard' ? 'page' : undefined}>
                    Admin
                  </Link>
                </li>
              )}
              <li>
                <button className="btn btn-ghost" onClick={() => signOut({ callbackUrl: '/' })}>
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/login" aria-current={pathname === '/login' ? 'page' : undefined}>
                  Login
                </Link>
              </li>
              <li>
                <Link href="/register" aria-current={pathname === '/register' ? 'page' : undefined}>
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}