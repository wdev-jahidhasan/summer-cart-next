"use client";
import { useContext } from "react";
import { ProductContext } from "@/components/ProductContext";
import Image from "next/image";
import Link from "next/link";
export default function ProductsPage() {
  const { products, loading } = useContext(ProductContext);
  if (loading) return <p className="text-center p-10 text-xl font-semibold text-yellow-400">Loading summer products...</p>;
  return (
    <div className="p-8 w-[95%] md:w-4/5 mx-auto">
      <h1 className="text-2xl text-purple-400 font-bold mb-6">Summer Collection</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border border-purple-300 bg-linear-to-br from-sky-100 to-yellow-50 p-4 rounded-xl shadow-sm">
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h2 className="font-bold mt-2 text-lg">{product.name}</h2>
            <p className="text-teal-500 text-sm">Brand: {product.brand}</p>
            <p className="text-slate-500 text-sm">Rating: {product.rating}</p>
            <div className="flex justify-between">
              <p className="text-orange-600 font-bold mt-1">${product.price}</p>
              <Link href={`/productDetails/${product.id}`} className="btn bg-yellow-300">Details</Link>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}