import { NextResponse } from "next/server";
import crypto from "crypto";
import path from "path";
import connectDB from "@/config/connectDB";
import Category from "@/models/category/Category";
import { uploadToR2 } from "@/utils/uploadToR2";
import { generateSlug } from "@/utils/generateSlug";

export async function GET() {
    try {
        await connectDB();
        const categories = await Category.find().sort({ createdAt: -1 });
        return NextResponse.json({
            success: true,
            categories,
        }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        await connectDB();
        const formData = await req.formData();
                const name = formData.get("name")?.trim();
        const image = formData.get("image");
        const metaTitle = formData.get("metaTitle")?.trim() || "";
        const metaDescription = formData.get("metaDescription")?.trim() || "";

        if (!name || !image) {
            return NextResponse.json({ success: false, message: "Name and image are required" }, { status: 400 });
        }

        let slug = generateSlug(name);
        const existingCategory = await Category.findOne({ slug });
        if (existingCategory) {
            slug = `${slug}-${crypto.randomBytes(2).toString("hex")}`;
        }

        const bytes = await image.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const extension = path.extname(image.name);
        const fileName = `${Date.now()}-${slug}${extension}`;

        const uploadedImage = await uploadToR2({
            file: buffer,
            folder: "categories",
            fileName,
            contentType: image.type,
        });

        const category = await Category.create({
            name,
            slug,
            image: uploadedImage.url,
            metaTitle,
            metaDescription,
        });

        return NextResponse.json({ success: true, message: "Category created successfully", category }, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
    }
}

export async function DELETE(req) {
    try {
        await connectDB();
        const { searchParams } = new URL(req.url);
        const id = searchParams.get("id");

        if (!id) {
            return NextResponse.json({ success: false, message: "ID is required" }, { status: 400 });
        }

        const category = await Category.findByIdAndDelete(id);
        if (!category) {
            return NextResponse.json({ success: false, message: "Category not found" }, { status: 404 });
        }

        return NextResponse.json({ success: true, message: "Category deleted successfully" }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
    }
}

export async function PUT(req) {
    try {
        await connectDB();
        const formData = await req.formData();
        const id = formData.get("id");
                const name = formData.get("name")?.trim();
        const image = formData.get("image");
        const metaTitle = formData.get("metaTitle")?.trim();
        const metaDescription = formData.get("metaDescription")?.trim();

        if (!id) {
            return NextResponse.json({ success: false, message: "ID is required" }, { status: 400 });
        }

        const category = await Category.findById(id);
        if (!category) {
            return NextResponse.json({ success: false, message: "Category not found" }, { status: 404 });
        }

        if (name) {
            category.name = name;
            category.slug = generateSlug(name);
        }

        if (metaTitle !== undefined) {
            category.metaTitle = metaTitle;
        }
        if (metaDescription !== undefined) {
            category.metaDescription = metaDescription;
        }

        if (image && typeof image !== "string") {
            const bytes = await image.arrayBuffer();
            const buffer = Buffer.from(bytes);
            const extension = path.extname(image.name);
            const fileName = `${Date.now()}-${category.slug}${extension}`;

            const uploadedImage = await uploadToR2({
                file: buffer,
                folder: "categories",
                fileName,
                contentType: image.type,
            });

            category.image = uploadedImage.url;
        }

        await category.save();
        return NextResponse.json({ success: true, message: "Category updated successfully", category }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
    }
}
