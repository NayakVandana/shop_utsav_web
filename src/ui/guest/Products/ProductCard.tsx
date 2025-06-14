'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { isLoggedin } from "@/utils/isLoggedin";
import { useCartStore } from './useCartStore';

export default function ProductCard({ product }) {
  const { addToCart } = useCartStore();
  const [isLogin, setIsLogin] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function checkLogin() {
      setIsLogin(await isLoggedin());
    }
    checkLogin();
  }, []);

  const reset = () => setErrors({});

  const handleAddToCart = async () => {
    setLoading(true);
    try {
      addToCart(
        { product_id: product.id, quantity: 1 },
        {
          success: () => {
            reset();
            setLoading(false);
          },
          error: (data) => {
            setLoading(false);
            if (data?.message) {
              setErrors({ submit_error: data.message });
            } else if (data?.errors) {
              setErrors({ ...data.errors });
            } else {
              setErrors({ submit_error: 'Something went wrong. Please try again.' });
            }
          },
        }
      );
    } catch (error) {
      setLoading(false);
      setErrors({ submit_error: 'Unexpected error. Please try again.' });
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-100 flex flex-col">
      <div className="relative">
        {product.mrp > product.price && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded z-10">
            {Math.round(((product.mrp - product.price) / product.mrp) * 100)}% OFF
          </span>
        )}
        <img
          src={product.image || '/images/placeholder.jpg'}
          alt={product.name}
          className="w-full h-56 object-cover rounded-t-xl"
        />
      </div>
      <div className="flex-1 flex flex-col p-4">
        <h2 className="text-lg font-bold text-gray-800 mb-1">{product.name}</h2>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xl font-semibold text-blue-600">₹{product.price}</span>
          {product.mrp > product.price && (
            <span className="text-sm text-gray-400 line-through">₹{product.mrp}</span>
          )}
        </div>
        <div className="flex-1"></div>
        <div className="flex gap-2 mt-4">
          <Link
            href={`/products/${product.id}`}
            className="flex-1 inline-flex justify-center items-center px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            View
          </Link>
          <button
            onClick={handleAddToCart}
            className={`flex-1 inline-flex justify-center items-center px-4 py-2 text-sm font-medium rounded-lg transition ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700 text-white'}`}
            disabled={loading}
          >
            {loading ? 'Adding...' : 'Add to Cart'}
          </button>
        </div>
        {errors.submit_error && (
          <div className="mt-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded p-2">
            {errors.submit_error}
          </div>
        )}
      </div>
    </div>
  );
}
