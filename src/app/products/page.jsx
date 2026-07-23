import React from 'react';
import dynamicImport from 'next/dynamic';
import connectDB from "@/config/connectDB";
import Category from "@/models/category/Category";
import Product from "@/models/Product/Product";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const categorySlug = resolvedSearchParams?.category;

  if (categorySlug) {
    try {
      await connectDB();
      const categoryData = await Category.findOne({ slug: categorySlug });
      if (categoryData && categoryData.metaTitle && categoryData.metaDescription) {
        return {
          title: categoryData.metaTitle,
          description: categoryData.metaDescription,
        };
      }
    } catch (error) {
      console.error("Error fetching category metadata:", error);
    }
  }

  return {
    title: "Shop Premium RO Cabinets & Purifiers | Crystal Impex",
    description: "Explore our collection of food-grade ABS RO cabinets, water purifiers, and OEM solutions.",
  };
}

const ProductPageHome = dynamicImport(() => import('./ProductPageHome'), {
  loading: () => (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-900"></div>
    </div>
  )
});

function mapProduct(prod) {
  const discPercent = prod.price && prod.discountPrice
    ? Math.round((1 - (prod.discountPrice / prod.price)) * 100)
    : 0;

  const categoryName = prod.category?.name || "Water Purifier";
  const firstVariant = prod.colorVariants?.[0];
  const image = firstVariant?.images?.[0]?.url || "/1.png";
  const allImages = firstVariant?.images?.map((img) => img.url) || [image];

  return {
    id: prod._id.toString(),
    slug: prod.slug,
    name: prod.name,
    price: prod.discountPrice || prod.price,
    originalPrice: prod.price,
    discount: discPercent > 0 ? `-${discPercent}%` : "",
    image,
    allImages,
    category: categoryName,
    specifications: prod.specifications || [],
    featured: prod.featured || false,
  };
}

export default async function page() {
  let preloadedProducts = [];
  let preloadedCategories = [];

  try {
    await connectDB();

    const rawProducts = await Product.find({ isActive: true })
      .populate("category")
      .sort({ createdAt: -1 })
      .lean();

    preloadedProducts = JSON.parse(JSON.stringify(rawProducts)).map(mapProduct);

    const rawCategories = await Category.find({ isActive: true }).lean();
    preloadedCategories = JSON.parse(JSON.stringify(rawCategories));
  } catch (error) {
    console.error("Server preloading failed:", error);
  }

  return (
    <ProductPageHome 
      preloadedProducts={preloadedProducts} 
      preloadedCategories={preloadedCategories} 
    />
  );
}
