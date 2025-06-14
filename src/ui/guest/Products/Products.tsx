"use client";
import InnerPageContainer from "@/components/InnterPageContainer";
import ProductCard from "./ProductCard";

export default function Products({ data }) {
  return (
    <InnerPageContainer title="Shop Utsav">
      <div className="bg-gray-50 py-8 min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">Welcome to Shop Utsav</h1>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {data.map((product) => (
              <ProductCard key={product.uuid} product={product} />
            ))}
          </div>
        </div>
      </div>
    </InnerPageContainer>
  );
}
