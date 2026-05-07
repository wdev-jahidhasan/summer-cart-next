"use client";

import { useContext, useEffect, useState } from "react";
import { ProductContext } from "@/components/ProductContext";
import Image from "next/image";
import { animated, useTrail } from "@react-spring/web";

export default function ProductsPage() {
  const { products, loading } = useContext(ProductContext);

  const popularIds = [1, 5, 11];

  const featuredProducts = products.filter((product) =>
    popularIds.includes(product.id)
  );

  const [toggle, setToggle] = useState(true);
  useEffect(() => {
  const interval = setInterval(() => {
    setToggle((prev) => !prev);
  }, 1500);

  return () => clearInterval(interval);
}, []);

  const trail = useTrail(featuredProducts.length, {
    from: {
      opacity: 0.6,
      transform: "translateY(10px)",
    },
    to: {
      opacity: toggle ? 1 : 0.6,
      transform: "translateY(0px)",
    },
    config: {
      tension: 170,
      friction: 20,
    },
  });


  if (loading) {
    return (
      <p className="text-center p-10 text-xl font-semibold text-yellow-400">Loading summer products...</p>
    ); 
  }
    


  return (

    <div className="p-8 w-[95%] md:w-4/5 mx-auto">
      <h1 className="text-center font-bold text-3xl md:text-4xl text-teal-400 mb-10">Popular Products</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {trail.map((style, index) => {
          const product = featuredProducts[index];
          

          return(
            <animated.div
              key={product.id}
              style={style}
              className="border border-purple-300 bg-linear-to-br from-sky-100 to-yellow-50 p-4 rounded-xl shadow-md"
            >
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
                  <button className="btn bg-yellow-300">Details</button>
                </div>
            </animated.div>
          );
        })}
      </div>
    </div>
  );
}