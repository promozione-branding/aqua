"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ProductPageHome({ preloadedProducts, preloadedCategories }) {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (categoryName) => {
    if (categoryName.toLowerCase() === "spare parts") {
      router.push("/products/spareparts");
    } else {
      setSelectedCategory(categoryName);
    }
  };

  const filteredProducts = useMemo(() => {
    return preloadedProducts.filter((prod) => {
      const matchCat = selectedCategory === "All" || prod.category === selectedCategory;
      return matchCat;
    });
  }, [preloadedProducts, selectedCategory]);

  return (
    <div className="bg-slate-50 text-slate-700 min-h-screen pt-6 pb-16 font-sans">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
          <Link href="/" className="hover:text-blue-900 transition">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-blue-950 font-bold">Products</span>
        </div>
        <h1 className="text-4xl font-extrabold text-blue-950 mt-3 tracking-tight">Our Collection</h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-[280px] shrink-0 bg-transparent lg:bg-white p-0 lg:p-6 rounded-2xl border-none lg:border lg:border-slate-200 shadow-none lg:shadow-sm h-fit lg:sticky lg:top-28">
          <div className="items-center justify-between border-b border-slate-100 pb-4 mb-6 hidden lg:flex">
            <h2 className="text-sm font-bold uppercase tracking-wider text-blue-950">Filters</h2>
            {selectedCategory !== "All" && (
              <button 
                onClick={() => { setSelectedCategory("All"); }} 
                className="text-xs font-bold text-red-500 hover:text-red-600 transition"
              >
                Clear All
              </button>
            )}
          </div>

          <div className="mb-0 lg:mb-8">
            <h3 className="text-xs font-bold uppercase text-slate-400 mb-3 tracking-wider hidden lg:block">Categories</h3>
            <div className="flex flex-row lg:flex-col overflow-x-auto gap-2 pb-4 lg:pb-0 scrollbar-none">
               <button
                onClick={() => handleCategoryClick("All")}
                className={`text-left px-4 py-2 lg:px-3 lg:py-2 rounded-full lg:rounded-lg text-sm font-semibold whitespace-nowrap transition shrink-0 ${
                  selectedCategory === "All"
                    ? "bg-blue-900 text-white font-bold"
                    : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 lg:border-none lg:bg-transparent lg:text-slate-700"
                }`}
              >
                All Products
              </button>
              {preloadedCategories.map((cat) => (
                <button
                  key={cat._id}
                  onClick={() => handleCategoryClick(cat.name)}
                  className={`text-left px-4 py-2 lg:px-3 lg:py-2 rounded-full lg:rounded-lg text-sm font-semibold whitespace-nowrap transition shrink-0 ${
                    selectedCategory === cat.name
                      ? "bg-blue-900 text-white font-bold"
                      : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 lg:border-none lg:bg-transparent lg:text-slate-700"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="flex-1">
          {filteredProducts.length === 0 ? (
            <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center shadow-sm">
              <p className="text-slate-400 font-bold text-sm tracking-wider">No matching products found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-6">
              {filteredProducts.map((prod) => (
                <Link
                  href={`/products/${prod.slug || prod.id}`}
                  key={prod.id}
                  className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 flex flex-col cursor-pointer"
                >
                  <div className="relative aspect-square bg-slate-50 flex items-center justify-center p-3 sm:p-6">
                    {prod.discount && (
                      <span className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-red-500 text-white text-[10px] sm:text-xs font-extrabold px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-md z-10">
                        {prod.discount}
                      </span>
                    )}
                    <Image
                      src={prod.image}
                      alt={prod.name}
                      fill
                      className="object-contain p-3 sm:p-6 group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="p-3 sm:p-5 flex flex-col flex-1">
                    <span className="text-[10px] sm:text-xs font-bold text-blue-600 uppercase tracking-widest">{prod.category}</span>
                    <h3 className="text-sm sm:text-lg font-bold text-blue-955 mt-1 line-clamp-1">{prod.name}</h3>
                    {prod.price > 0 && (
                      <div className="flex items-baseline gap-1 sm:gap-2 mt-2">
                        <span className="text-base sm:text-xl font-extrabold text-blue-955">₹{prod.price.toLocaleString()}</span>
                        {prod.originalPrice > prod.price && (
                          <span className="text-[10px] sm:text-sm line-through text-slate-400">₹{prod.originalPrice.toLocaleString()}</span>
                        )}
                      </div>
                    )}
                    <div className="mt-auto pt-4">
                      <div
                        className="block text-center w-full bg-blue-900 group-hover:bg-blue-955 text-white text-xs sm:text-sm font-bold py-2 px-3 sm:py-2.5 sm:px-4 rounded-lg sm:rounded-xl transition duration-150"
                      >
                        VIEW DETAILS
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
