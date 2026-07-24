import connectDB from "@/config/connectDB";
import Product from "@/models/Product/Product";
import ScrollDrivenHorizontal from "@/components/ui/ScrollDrivenHorizontal";

export default async function FeaturedProducts() {
  let products = [];
  try {
    await connectDB();
    const rawProducts = await Product.find({ isActive: true })
      .sort({ name: 1 })
      .limit(10)
      .lean();

    products = JSON.parse(JSON.stringify(rawProducts)).map((prod) => {
      const specs = prod.specifications || [];
      const storageSpec = specs.find(s => s.key.toLowerCase().includes("storage"))?.value || "N/A";
      const materialSpec = specs.find(s => s.key.toLowerCase().includes("material"))?.value || "ABS Food Grade";
      const firstVariant = prod.colorVariants?.[0];
      const image = firstVariant?.images?.[0]?.url || "/1.png";

      return {
        id: prod._id.toString(),
        slug: prod.slug || prod._id.toString(),
        name: prod.name,
        storage: storageSpec,
        material: materialSpec,
        image,
      };
    });
  } catch (error) {
    console.error("Failed to load featured products:", error);
  }

  return <ScrollDrivenHorizontal products={products} />;
}