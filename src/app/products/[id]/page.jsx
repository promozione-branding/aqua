import dynamicImport from 'next/dynamic';
import connectDB from "@/config/connectDB";
import Product from "@/models/Product/Product";
import Category from "@/models/category/Category";

export const dynamic = "force-dynamic";
export const revalidate = 0;

// Generates browser tab titles dynamically
export async function generateMetadata({ params }) {
  const { id } = await params;
  try {
    await connectDB();
    let product = null;
    if (id && id.match(/^[0-9a-fA-F]{24}$/)) {
      product = await Product.findById(id);
    }
    if (!product) {
      product = await Product.findOne({ slug: id });
    }

    if (!product) {
      return {
        title: "Crystal Impex | Premium RO Cabinets",
        description: "Premium food-grade ABS RO cabinets.",
      };
    }

    return {
      title: product.metaTitle || `${product.name} | Crystal Impex`,
      description: product.metaDescription || product.shortDescription || `Buy ${product.name} online from Crystal Impex.`,
    };
  } catch (e) {
    console.error("Error generating metadata:", e);
    return {
      title: "Crystal Impex",
      description: "Premium water purifiers and parts.",
    };
  }
}

const ProductDetailClient = dynamicImport(() => import('./DatailePage'), {
  loading: () => (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-900"></div>
    </div>
  )
});

export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  let serializedProduct = null;
  let relatedProducts = [];

  try {
    await connectDB();
    let productDoc = null;
    if (id && id.match(/^[0-9a-fA-F]{24}$/)) {
      productDoc = await Product.findById(id).populate("category").lean();
    }
    if (!productDoc) {
      productDoc = await Product.findOne({ slug: id }).populate("category").lean();
    }

    if (productDoc) {
      serializedProduct = JSON.parse(JSON.stringify(productDoc));
      
      // Fetch up to 4 related products from the same category
      const rawRelated = await Product.find({
        category: productDoc.category?._id,
        _id: { $ne: productDoc._id },
        isActive: true
      }).limit(4).lean();
      
      relatedProducts = JSON.parse(JSON.stringify(rawRelated)).map(p => ({
        name: p.name,
        image: p.colorVariants?.[0]?.images?.[0]?.url || "/1.png",
        storage: p.specifications?.find(s => s.key.toLowerCase().includes("capacity"))?.value || "12L",
        tile: "#111827",
        slug: p.slug || p._id.toString()
      }));
    }
  } catch (error) {
    console.error("Error preloading details:", error);
  }

  if (!serializedProduct) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <p className="text-lg font-bold text-red-500">Product not found.</p>
      </div>
    );
  }

  return <ProductDetailClient product={serializedProduct} preloadedRelated={relatedProducts} />;
}
