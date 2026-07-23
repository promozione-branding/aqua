import { NextResponse } from "next/server";
import path from "path";
import connectDB from "@/config/connectDB";
import SubCategory from "@/models/subcategory/SubCategory";
import Category from "@/models/category/Category";
import { uploadToR2 } from "@/utils/uploadToR2";
import { generateSlug } from "@/utils/generateSlug";

export const dynamic = "force-dynamic";

// 1. GET ALL SUBCATEGORIES (populated with parent category name)
export async function GET() {
  try {
    await connectDB();
    const subCategories = await SubCategory.find({})
      .populate("category", "name") // Fills parent category's name
      .sort({ createdAt: -1 });
    return NextResponse.json({ success: true, subCategories });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// 2. ADD SUBCATEGORY (POST)
export async function POST(req) {
  try {
    await connectDB();
    const formData = await req.formData();
    const name = formData.get("name")?.trim();
    const category = formData.get("category"); // Parent Category ID
    const image = formData.get("image"); // File object
    const description = formData.get("description") || "";

    if (!name || !category || !image) {
      return NextResponse.json(
        { success: false, message: "Name, Category, and Image are required" },
        { status: 400 }
      );
    }

    let slug = generateSlug(name);
    const existing = await SubCategory.findOne({ slug });
    if (existing) {
      slug = `${slug}-${Date.now().toString().slice(-4)}`;
    }

    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadedImage = await uploadToR2({
      file: buffer,
      folder: "subcategories",
      fileName: `${Date.now()}-${image.name}`,
      contentType: image.type,
    });

    const subCategory = await SubCategory.create({
      name,
      slug,
      image: uploadedImage.url,
      description,
      category,
    });

    return NextResponse.json({ success: true, subCategory }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// 3. UPDATE SUBCATEGORY (PUT)
export async function PUT(req) {
  try {
    await connectDB();
    const formData = await req.formData();
    const id = formData.get("id");
    const name = formData.get("name")?.trim();
    const category = formData.get("category");
    const image = formData.get("image");
    const description = formData.get("description") || "";

    if (!id) {
      return NextResponse.json({ success: false, message: "ID is required" }, { status: 400 });
    }

    const subCategory = await SubCategory.findById(id);
    if (!subCategory) {
      return NextResponse.json({ success: false, message: "SubCategory not found" }, { status: 404 });
    }

    if (name) {
      subCategory.name = name;
      subCategory.slug = generateSlug(name);
    }
    if (category) {
      subCategory.category = category;
    }
    if (description) {
      subCategory.description = description;
    }

    if (image && image !== "undefined" && typeof image !== "string") {
      const bytes = await image.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const extension = path.extname(image.name) || ".webp";
      const fileName = `${Date.now()}-${generateSlug(subCategory.name || name)}${extension}`;

      const uploadedImage = await uploadToR2({
        file: buffer,
        folder: "subcategories",
        fileName,
        contentType: image.type,
      });

      subCategory.image = uploadedImage.url;
    }

    await subCategory.save();
    return NextResponse.json({ success: true, message: "SubCategory updated successfully", subCategory }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// 4. DELETE SUBCATEGORY (DELETE)
export async function DELETE(req) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ success: false, message: "SubCategory ID is required" }, { status: 400 });
    }

    const deleted = await SubCategory.findByIdAndDelete(id);
    if (!deleted) {
      return NextResponse.json({ success: false, message: "SubCategory not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: "SubCategory deleted successfully" });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
