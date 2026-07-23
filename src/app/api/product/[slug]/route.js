import { NextResponse } from "next/server";
import connectDB from "@/config/connectDB";
import Product from "@/models/Product/Product";
import Category from "@/models/category/Category";
import SubCategory from "@/models/subcategory/SubCategory";
import { uploadToR2 } from "@/utils/uploadToR2";
import { generateSlug } from "@/utils/generateSlug";
import crypto from "crypto";
import path from "path";

export const dynamic = "force-dynamic";

// GET SINGLE PRODUCT (By Slug or ID)
export async function GET(req, { params }) {
  try {
    await connectDB();
    const { slug } = await params;
    
    let product = null;
    if (slug && slug.match(/^[0-9a-fA-F]{24}$/)) {
      product = await Product.findById(slug).populate("category").populate("subCategory");
    }
    if (!product) {
      product = await Product.findOne({ slug }).populate("category").populate("subCategory");
    }

    if (!product) {
      return NextResponse.json({ success: false, message: "Product not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, product });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

// PUT: UPDATE PRODUCT
export async function PUT(req, { params }) {
  try {
    await connectDB();
    const { slug } = await params;

    const product = await Product.findOne({ slug });
    if (!product) {
      return NextResponse.json({ success: false, message: "Product not found" }, { status: 404 });
    }

    const formData = await req.formData();
    const name = formData.get("name")?.trim();
    const customSlug = formData.get("slug")?.trim();
    const price = Number(formData.get("price") || 0);
    const discountPrice = Number(formData.get("discountPrice") || 0);
    const category = formData.get("category");
    const subCategory = formData.get("subCategory") || null;
    const shortDescription = formData.get("shortDescription")?.trim() || "";
    const description = formData.get("description")?.trim() || "";
    const metaTitle = formData.get("metaTitle")?.trim() || "";
    const metaDescription = formData.get("metaDescription")?.trim() || "";
    
    const specifications = JSON.parse(formData.get("specifications") || "[]");
    const colorVariantsData = JSON.parse(formData.get("colorVariants") || "[]");

    // Update basic details
    if (name) product.name = name;
    product.price = price;
    product.discountPrice = discountPrice;
    if (category) product.category = category;
    product.subCategory = subCategory || null;
    product.shortDescription = shortDescription;
    product.description = description;
    product.metaTitle = metaTitle;
    product.metaDescription = metaDescription;
    product.specifications = specifications;

    // Handle slug updates
    if (customSlug) {
      const formattedSlug = generateSlug(customSlug);
      const duplicate = await Product.findOne({ slug: formattedSlug, _id: { $ne: product._id } });
      if (duplicate) {
        return NextResponse.json({ success: false, message: "Slug already in use" }, { status: 400 });
      }
      product.slug = formattedSlug;
    } else if (name) {
      product.slug = generateSlug(name);
    }

    // Upload new images and merge with existing ones per variant
    const uploadedColorVariants = await Promise.all(
      colorVariantsData.map(async (variant, variantIndex) => {
        const files = formData.getAll(`variant_${variantIndex}`);

        const uploadedImages = await Promise.all(
          files.map(async (image) => {
            const bytes = await image.arrayBuffer();
            const buffer = Buffer.from(bytes);
            const extension = path.extname(image.name) || ".webp";
            const fileName = `${Date.now()}-variant-${variantIndex}-${crypto.randomBytes(2).toString("hex")}${extension}`;

            const uploadedImage = await uploadToR2({
              file: buffer,
              folder: "products",
              fileName,
              contentType: image.type,
            });

            return {
              url: uploadedImage.url,
              imageField: uploadedImage.key,
            };
          })
        );

        return {
          colorName: variant.colorName,
          images: [...(variant.existingImages || []), ...uploadedImages],
        };
      })
    );

    product.colorVariants = uploadedColorVariants;
    await product.save();

    return NextResponse.json({ success: true, message: "Product updated successfully", product });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
