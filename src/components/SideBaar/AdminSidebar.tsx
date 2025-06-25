'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-base-200 min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
      <ul className="menu">
        <li>
          <Link href="/admin/dashboard" className={pathname === '/admin/dashboard' ? 'active' : ''}>
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/admin/products" className={pathname === '/admin/products' ? 'active' : ''}>
            Products
          </Link>
        </li>
        <li>
          <Link href="/admin/products/create" className={pathname === '/admin/products/create' ? 'active' : ''}>
            Create Product
          </Link>
        </li>
        <li>
          <Link href="/admin/categories" className={pathname === '/admin/categories' ? 'active' : ''}>
            Categories
          </Link>
        </li>
        <li>
          <Link href="/admin/categories/create" className={pathname === '/admin/categories/create' ? 'active' : ''}>
            Create Category
          </Link>
        </li>
        <li>
          <Link href="/admin/orders" className={pathname === '/admin/orders' ? 'active' : ''}>
            Orders
          </Link>
        </li>
      </ul>
    </div>
  );
}