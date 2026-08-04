import connectDB from "@/config/connectDB";
import Product from "@/models/Product/Product";
import ProductCategoriesClient from "./ProductCategoriesClient";

export default async function ProductCategories() {
  let categories = [];
  try {
    await connectDB();

    const targetNames = ["ALTIS", "ALIVE", "AROMA"];
    const matchedProducts = [];

    // 1. Try to find products matching the names specifically
    for (const targetName of targetNames) {
      const found = await Product.findOne({
        isActive: true,
        name: { $regex: new RegExp(targetName, "i") },
      })
        .populate("category", "slug name")
        .lean();

      if (found) {
        matchedProducts.push(found);
      }
    }

    // 2. Fallback to other cabinet products if less than 3
    if (matchedProducts.length < 3) {
      const matchedIds = matchedProducts.map((p) => p._id);
      const fallbackProducts = await Product.find({
        isActive: true,
        _id: { $nin: matchedIds },
      })
        .populate("category", "slug name")
        .limit(3 - matchedProducts.length)
        .lean();

      matchedProducts.push(...fallbackProducts);
    }

    // 3. Map to UI format
    categories = JSON.parse(JSON.stringify(matchedProducts)).map((prod) => {
      const firstVariant = prod.colorVariants?.[0];
      const imageUrl = firstVariant?.images?.[0]?.url || "/1.png";

      const points =
        prod.specifications && prod.specifications.length > 0
          ? prod.specifications
              .map((spec) => `${spec.key}: ${spec.value}`)
              .slice(0, 4)
          : [
              "Food-Grade ABS Plastic",
              "Elegant & Modern Design",
              "High Storage Capacity",
              "Universal Component Fit",
            ];

      return {
        id: prod._id.toString(),
        title: prod.name,
        firstVariant: firstVariant,
        image: imageUrl,
        slug: prod.slug || prod._id.toString(),
        categorySlug: prod.category?.slug || "ro-cabinet",
        points,
      };
    });
  } catch (error) {
    console.error("Error fetching cabinet products on server:", error);
  }

  return <ProductCategoriesClient categories={categories} />;
}
