'use client';

import Link from 'next/link';

export default function AdminSidebar() {
  return (
    <div className="w-64 bg-base-200 min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
      <ul className="menu">
        <li><Link href="/admin/dashboard">Dashboard</Link></li>
        <li><Link href="/admin/products">Products</Link></li>
        <li><Link href="/admin/products/create">Create Product</Link></li>
        <li><Link href="/admin/categories">Categories</Link></li>
        <li><Link href="/admin/categories/create">Create Category</Link></li>
        <li><Link href="/admin/orders">Orders</Link></li>
      </ul>
    </div>
  );
}