import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import connectDB from "@/config/connectDB";
import Category from "@/models/category/Category";
import SubCategory from "@/models/subcategory/SubCategory";
// Tells Next.js to not cache the DB queries and always serve fresh data
export const dynamic = "force-dynamic";
export const revalidate = 0;
export async function generateMetadata() {
  return {
    title: "Spare Parts Categories | JNJ Aqua",
    description: "Browse our high-quality RO spare parts, inline filters, membranes, pumps, and cabinets.",
  };
}
export default async function SparePartsPage() {
  let subCategories = [];
  let categoryName = "Spare Parts";
  try {
    await connectDB();
    // 1. Find the parent Category for "Spare Parts" (case-insensitive search)
    const parentCategory = await Category.findOne({
      name: { $regex: new RegExp("^Spare Parts$", "i") }
    }).lean();
    if (parentCategory) {
      categoryName = parentCategory.name;
      // 2. Fetch all active subcategories belonging to this parent category
      const rawSubCategories = await SubCategory.find({
        category: parentCategory._id,
        isActive: true
      })
      .sort({ name: 1 }) // sort alphabetically
      .lean();
      subCategories = JSON.parse(JSON.stringify(rawSubCategories));
    }
  } catch (error) {
    console.error("Failed to load spare parts subcategories:", error);
  }
  return (
    <div className="bg-slate-50 text-slate-700 min-h-screen pt-8 pb-16 font-sans">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
          <Link href="/" className="hover:text-blue-900 transition">Home</Link>
          <span className="text-slate-300">/</span>
          <Link href="/products" className="hover:text-blue-900 transition">Products</Link>
          <span className="text-slate-300">/</span>
          <span className="text-blue-950 font-bold">{categoryName}</span>
        </div>
        <h1 className="text-4xl font-extrabold text-blue-950 mt-4 tracking-tight">
          {categoryName}
        </h1>
        <p className="text-slate-500 mt-2 text-sm md:text-base">
          Select a category below to browse premium water purification components.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-6">
        {subCategories.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center shadow-sm">
            <p className="text-slate-400 font-bold text-sm tracking-wider">
              No categories found. Please add subcategories in the admin panel.
            </p>
          </div>
        ) : (
          /* Grid showing SubCategory Cards */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {subCategories.map((sub) => (
              <div 
                key={sub._id} 
                className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 flex flex-col"
              >
                {/* Image Container */}
                <div className="relative aspect-square bg-slate-50 flex items-center justify-center p-4">
                  <Image
                    src={sub.image || "/1.png"}
                    alt={sub.name}
                    fill
                    className="object-contain p-6 group-hover:scale-105 transition duration-300"
                  />
                </div>
                {/* Subcategory Details */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-blue-950 line-clamp-1">
                    {sub.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2 min-h-[32px]">
                    {sub.description || "Premium water purifier spare parts and components."}
                  </p>
                  
                  {/* Link pointing to the subcategory products page */}
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <Link
                      href={`/products/spareparts/${sub.slug}`}
                      className="block text-center w-full bg-blue-900 hover:bg-blue-955 text-white text-xs font-bold py-2.5 px-4 rounded-xl transition duration-150"
                    >
                      BROWSE ITEMS
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}