"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function ProductPageHome({ preloadedProducts, preloadedCategories }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(15000);

  const filteredProducts = useMemo(() => {
    return preloadedProducts.filter((prod) => {
      const matchCat = selectedCategory === "All" || prod.category === selectedCategory;
      const matchPrice = prod.price <= maxPrice;
      return matchCat && matchPrice;
    });
  }, [preloadedProducts, selectedCategory, maxPrice]);

  return (
    <div className="bg-slate-50 text-slate-700 min-h-screen pt-6 pb-16 font-sans">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-405">
          <Link href="/" className="hover:text-blue-900 transition">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-blue-950 font-bold">Products</span>
        </div>
        <h1 className="text-4xl font-extrabold text-blue-955 mt-3 tracking-tight">Our Collection</h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-[280px] shrink-0 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm h-fit sticky top-28">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-blue-955">Filters</h2>
            {(selectedCategory !== "All" || maxPrice !== 15000) && (
              <button 
                onClick={() => { setSelectedCategory("All"); setMaxPrice(15000); }} 
                className="text-xs font-bold text-red-500 hover:text-red-600 transition"
              >
                Clear All
              </button>
            )}
          </div>

          <div className="mb-8">
            <h3 className="text-xs font-bold uppercase text-slate-400 mb-3 tracking-wider">Categories</h3>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => setSelectedCategory("All")}
                className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition ${
                  selectedCategory === "All" ? "bg-blue-50 text-blue-900 font-bold" : "hover:bg-slate-50"
                }`}
              >
                All Products
              </button>
              {preloadedCategories.map((cat) => (
                <button
                  key={cat._id}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition ${
                    selectedCategory === cat.name ? "bg-blue-50 text-blue-900 font-bold" : "hover:bg-slate-50"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xs font-bold uppercase text-slate-400 tracking-wider">Max Price</h3>
              <span className="text-sm font-bold text-blue-955">₹{maxPrice.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min={1000}
              max={15000}
              step={500}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-blue-900 cursor-pointer h-1.5 bg-slate-100 rounded-lg appearance-none"
            />
          </div>
        </aside>

        {/* Product Grid */}
        <main className="flex-1">
          {filteredProducts.length === 0 ? (
            <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center shadow-sm">
              <p className="text-slate-400 font-bold text-sm tracking-wider">No matching products found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((prod) => (
                <div key={prod.id} className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 flex flex-col">
                  <div className="relative aspect-square bg-slate-50 flex items-center justify-center p-6">
                    {prod.discount && (
                      <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-extrabold px-2.5 py-1 rounded-md">
                        {prod.discount}
                      </span>
                    )}
                    <Image
                      src={prod.image}
                      alt={prod.name}
                      fill
                      className="object-contain p-6 group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">{prod.category}</span>
                    <h3 className="text-lg font-bold text-blue-955 mt-1 line-clamp-1">{prod.name}</h3>
                    <div className="flex items-baseline gap-2 mt-2">
                      <span className="text-xl font-extrabold text-blue-955">₹{prod.price.toLocaleString()}</span>
                      {prod.originalPrice > prod.price && (
                        <span className="text-sm line-through text-slate-400">₹{prod.originalPrice.toLocaleString()}</span>
                      )}
                    </div>
                    <div className="mt-auto pt-5">
                      <Link
                        href={`/products/${prod.slug || prod.id}`}
                        className="block text-center w-full bg-blue-900 hover:bg-blue-955 text-white text-sm font-bold py-2.5 px-4 rounded-xl transition duration-150"
                      >
                        VIEW DETAILS
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
