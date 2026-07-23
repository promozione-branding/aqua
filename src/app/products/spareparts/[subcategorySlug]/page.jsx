import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import connectDB from "@/config/connectDB";
import SubCategory from "@/models/subcategory/SubCategory";
import Product from "@/models/Product/Product";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata({ params }) {
  const { subcategorySlug } = await params;
  try {
    await connectDB();
    const sub = await SubCategory.findOne({ slug: subcategorySlug }).lean();
    return {
      title: sub ? `${sub.name} | JNJ Aqua` : "Products",
      description: sub?.description || "Browse our high quality items.",
    };
  } catch (e) {
    return { title: "Products" };
  }
}

export default async function SubCategoryProductsPage({ params }) {
  const { subcategorySlug } = await params;
  let products = [];
  let subCategoryData = null;

  try {
    await connectDB();

    // 1. Find the subcategory using the slug from the URL
    subCategoryData = await SubCategory.findOne({ slug: subcategorySlug }).lean();

    if (subCategoryData) {
      // 2. Fetch all active products matching this subcategory ID
      const rawProducts = await Product.find({
        subCategory: subCategoryData._id,
        isActive: true
      })
      .sort({ createdAt: -1 })
      .lean();

      // Map DB products to match your client format
      products = JSON.parse(JSON.stringify(rawProducts)).map((prod) => {
        const discPercent = prod.price && prod.discountPrice
          ? Math.round((1 - (prod.discountPrice / prod.price)) * 100)
          : 0;

        const firstVariant = prod.colorVariants?.[0];
        const image = firstVariant?.images?.[0]?.url || "/1.png";

        return {
          id: prod._id.toString(),
          slug: prod.slug,
          name: prod.name,
          price: prod.discountPrice || prod.price,
          originalPrice: prod.price,
          discount: discPercent > 0 ? `-${discPercent}%` : "",
          image,
        };
      });
    }
  } catch (error) {
    console.error("Failed to load products for subcategory:", error);
  }

  if (!subCategoryData) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <p className="text-red-500 font-bold">Category not found.</p>
      </div>
    );
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
          <Link href="/products/spareparts" className="hover:text-blue-900 transition">Spare Parts</Link>
          <span className="text-slate-300">/</span>
          <span className="text-blue-950 font-bold">{subCategoryData.name}</span>
        </div>

        <h1 className="text-4xl font-extrabold text-blue-955 mt-4 tracking-tight">
          {subCategoryData.name}
        </h1>
        <p className="text-slate-500 mt-2 text-sm">
          {subCategoryData.description || `Browse our premium selection of ${subCategoryData.name}`}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {products.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center shadow-sm">
            <p className="text-slate-400 font-bold text-sm tracking-wider">
              No products found in this category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((prod) => (
              <div 
                key={prod.id} 
                className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 flex flex-col"
              >
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
                  <h3 className="text-lg font-bold text-blue-955 line-clamp-1">{prod.name}</h3>
                  
                  {prod.price > 0 && (
                    <div className="flex items-baseline gap-2 mt-2">
                      <span className="text-xl font-extrabold text-blue-955">₹{prod.price.toLocaleString()}</span>
                      {prod.originalPrice > prod.price && (
                        <span className="text-sm line-through text-slate-400">₹{prod.originalPrice.toLocaleString()}</span>
                      )}
                    </div>
                  )}

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
      </div>
    </div>
  );
}
