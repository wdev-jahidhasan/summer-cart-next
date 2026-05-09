import Image from 'next/image';
import Link from 'next/link';
import data from "@/../public/data.json";

export default async function ProductDetails({ params }) {
  const { id } = await params;

  const product = data.find((p) => p.id == id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-bold text-red-500">No Product Found</h2>
        <Link href="/products" className="text-teal-600 underline">See All Products</Link>
      </div>
    );
  }

  return (
    <div className='w-11/12 md:w-2/5 mx-auto my-10 font-sans'>
      <div className="bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden transition-all hover:shadow-2xl">

        <div className="relative w-full h-48 lg:h-80 bg-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />

          <span className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            {product.category}
          </span>
        </div>

        <div className="p-6 text-left">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h1 className="text-2xl font-bold text-slate-800">{product.name}</h1>
              <p className="text-sm text-teal-600 font-medium italic">Brand: {product.brand}</p>
              <p className="text-xs text-slate-400">In Stock: {product.stock}</p>
            </div>
            <div className="text-right">
              <div className="flex items-center">
                <span className="text-yellow-400 text-lg mr-1">★</span>
                <span className="font-bold text-slate-700">{product.rating}</span>
             </div>
              <p className="text-2xl font-bold text-orange-600">${product.price}</p>
              
            </div>
          </div>

          <div className="flex items-center gap-4 mb-6 border-t border-b border-gray-100 py-3">
             <p className="text-slate-600 leading-relaxed">
            {product.description}
          </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/products" className="flex-1">
              <button className="w-full bg-teal-600 text-white font-bold py-3 rounded-lg hover:bg-teal-500 transition-colors">
                Back to Shop
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}