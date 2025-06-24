// src/ui/admin/Products/products.tsx



"use client";

import { useEffect } from "react";
import { useProductsStore } from "./useProductsStore";


export default function Products() {
  const { getProducts,products } = useProductsStore();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="flex">
      <div className="flex-1 p-4">
        <h1 className="text-3xl font-bold mb-4">Manage Products</h1>
        <div className="space-y-4">
        {products.map((product) => (
  <div key={product.uuid} className="card bg-base-100 shadow-xl">
    <div className="card-body">
      <h2 className="card-title">{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>Stock: {product.stock}</p>
      <div className="card-actions justify-end">
        <button className="btn btn-error">Delete</button>
      </div>
    </div>
  </div>
))}

        </div>
      </div>
    </div>
  );
}

