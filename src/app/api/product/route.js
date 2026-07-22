import { NextResponse } from "next/server";
import crypto from "crypto";
import path from "path";
import connectDB from "@/config/connectDB";
import Product from "@/models/Product/Product";
import { uploadToR2 } from "@/utils/uploadToR2";
import { generateSlug } from "@/utils/generateSlug";

export async function POST(req) {
  try {
    await connectDB();
    const formData = await req.formData();
    
    const name = formData.get("name")?.trim();
    const description = formData.get("description")?.trim() || "";
    const shortDescription = formData.get("shortDescription")?.trim() || "";
    const specifications = JSON.parse(formData.get("specifications") || "[]");
    const price = Number(formData.get("price"));
    const discountPrice = Number(formData.get("discountPrice") || 0);
    const stock = Number(formData.get("stock") || 0);
    const category = formData.get("category");
    const subCategory = formData.get("subCategory") || null;
    const featured = formData.get("featured") === "true";
    const metaTitle = formData.get("metaTitle")?.trim() || "";
    const metaDescription = formData.get("metaDescription")?.trim() || "";

    if (!name || !price || !category) {
      return NextResponse.json(
        { success: false, message: "Name, Price, and Category are required" },
        { status: 400 }
      );
    }

    let slug = generateSlug(name);
    const existing = await Product.findOne({ slug });
    if (existing) {
      slug = `${slug}-${crypto.randomBytes(2).toString("hex")}`;
    }

    // Handle multiple image uploads per color variant
    const colorData = JSON.parse(formData.get("colorVariants") || "[]");
    const savedColorVariants = [];

    for (let variantIndex = 0; variantIndex < colorData.length; variantIndex++) {
      const variantInfo = colorData[variantIndex];
      const uploadedFiles = [];

      // Get files for this specific variant
      const files = formData.getAll(`variant_${variantIndex}`);

      for (let fileIndex = 0; fileIndex < files.length; fileIndex++) {
        const file = files[fileIndex];
        if (file && typeof file !== "string") {
          const bytes = await file.arrayBuffer();
          const buffer = Buffer.from(bytes);
          const extension = path.extname(file.name) || ".webp";
          const fileName = `${Date.now()}-variant-${variantIndex}-${fileIndex}${extension}`;

          const uploadedImage = await uploadToR2({
            file: buffer,
            folder: "products",
            fileName,
            contentType: file.type,
          });

          uploadedFiles.push({
            url: uploadedImage.url,
            imageField: uploadedImage.key,
          });
        }
      }

      savedColorVariants.push({
        colorName: variantInfo.colorName,
        images: uploadedFiles,
      });
    }

    const product = await Product.create({
      name,
      slug,
      description,
      shortDescription,
      price,
      discountPrice,
      stock,
      category,
      subCategory: subCategory || null,
      featured,
      colorVariants: savedColorVariants,
      specifications,
      metaTitle,
      metaDescription,
    });

    return NextResponse.json({ success: true, message: "Product created successfully", product }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// GET: Fetch all products (with category and subcategory details populated)
export async function GET() {
  try {
    await connectDB();
    const products = await Product.find({})
      .populate("category", "name")
      .populate("subCategory", "name")
      .sort({ createdAt: -1 });
    return NextResponse.json({ success: true, products });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
// DELETE: Delete a product by ID (?id=xxxx)
export async function DELETE(req) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json({ success: false, message: "Product ID is required" }, { status: 400 });
    }
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return NextResponse.json({ success: false, message: "Product not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}