"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { UploadCloud, Tag, Trash2, Pencil, X, Loader2 } from "lucide-react";
import Sidebar from "../Sidebar";
import axios from "axios";
import toast from "react-hot-toast";

export default function SubCategoriesPage() {
    const [subCategoryName, setSubCategoryName] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [description, setDescription] = useState("");
    const [imagePreview, setImagePreview] = useState(null); // Can be URL string or { url, originalSize, newSize }
    const [imageFile, setImageFile] = useState(null);

    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [editingId, setEditingId] = useState(null);

    // Client-side WebP converter
    const convertToWebP = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (event) => {
                const img = new window.Image();
                img.onload = () => {
                    let width = img.width;
                    let height = img.height;
                    const MAX_SIZE = 1200;

                    if (width > height && width > MAX_SIZE) {
                        height = Math.round((height * MAX_SIZE) / width);
                        width = MAX_SIZE;
                    } else if (height > MAX_SIZE) {
                        width = Math.round((width * MAX_SIZE) / height);
                        height = MAX_SIZE;
                    }

                    const canvas = document.createElement("canvas");
                    canvas.width = width;
                    canvas.height = height;

                    const ctx = canvas.getContext("2d");
                    if (!ctx) {
                        resolve(file);
                        return;
                    }

                    ctx.drawImage(img, 0, 0, width, height);
                    canvas.toBlob(
                        (blob) => {
                            if (!blob) {
                                resolve(file);
                                return;
                            }
                            const webpFile = new File(
                                [blob],
                                `${file.name.replace(/\.[^/.]+$/, "")}.webp`,
                                { type: "image/webp" }
                            );
                            webpFile.originalSize = file.size; // Store original size
                            resolve(webpFile);
                        },
                        "image/webp",
                        0.85
                    );
                };
                img.onerror = () => reject(new Error("Failed to load image"));
                img.src = event.target.result;
            };
            reader.onerror = () => reject(new Error("Failed to read file"));
            reader.readAsDataURL(file);
        });
    };

    const handleImageChange = async (e) => {
        const file = e.target.files?.[0];
        if (file) {
            try {
                toast.loading("Converting and compressing image...", { id: "webp-convert" });
                const webpFile = await convertToWebP(file);
                setImageFile(webpFile);
                setImagePreview({
                    url: URL.createObjectURL(webpFile),
                    originalSize: file.size,
                    newSize: webpFile.size,
                });
                toast.success("Image converted to WebP successfully", { id: "webp-convert" });
            } catch (error) {
                console.error(error);
                toast.error("Failed to process image", { id: "webp-convert" });
            }
        }
    };

    const fetchData = async () => {
        try {
            setLoading(true);
            const [catRes, subRes] = await Promise.all([
                axios.get("/api/category"),
                axios.get("/api/subcategory")
            ]);
            if (catRes.data.success) setCategories(catRes.data.categories);
            if (subRes.data.success) setSubCategories(subRes.data.subCategories);
        } catch (error) {
            console.error(error);
            toast.error("Failed to load data");
        } finally {
            setLoading(false);
        }
    };

    const deleteSubCategory = async (id) => {
        if (!window.confirm("Are you sure you want to delete this subcategory?")) return;
        try {
            const { data } = await axios.delete(`/api/subcategory?id=${id}`);
            if (data.success) {
                toast.success("SubCategory deleted successfully");
                fetchData();
                if (editingId === id) cancelEdit();
            }
        } catch (error) {
            toast.error("Failed to delete subcategory");
        }
    };

    const handleEdit = (subCat) => {
        setEditingId(subCat._id);
        setSubCategoryName(subCat.name);
        setSelectedCategory(subCat.category?._id || "");
        setDescription(subCat.description || "");
        setImagePreview(subCat.image);
        setImageFile(null);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const cancelEdit = () => {
        setEditingId(null);
        setSubCategoryName("");
        setSelectedCategory("");
        setDescription("");
        setImageFile(null);
        setImagePreview(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!selectedCategory) {
            toast.error("Please select a parent category");
            return;
        }

        try {
            setSubmitting(true);
            const formData = new FormData();
            formData.append("name", subCategoryName);
            formData.append("category", selectedCategory);
            formData.append("description", description);

            if (editingId) {
                formData.append("id", editingId);
                if (imageFile) formData.append("image", imageFile);
                const { data } = await axios.put("/api/subcategory", formData);
                if (data.success) {
                    toast.success("SubCategory Updated Successfully");
                    fetchData();
                    cancelEdit();
                }
            } else {
                if (!imageFile) {
                    toast.error("Please upload an image");
                    return;
                }
                formData.append("image", imageFile);
                const { data } = await axios.post("/api/subcategory", formData);
                if (data.success) {
                    toast.success("SubCategory Added Successfully");
                    fetchData();
                    cancelEdit();
                }
            }
        } catch (error) {
            toast.error("Something went wrong");
        } finally {
            setSubmitting(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const isPreviewObj = imagePreview && typeof imagePreview === "object";
    const previewUrl = isPreviewObj ? imagePreview.url : imagePreview;

    return (
        <div className="min-h-screen bg-gray-100 flex md:flex-row flex-col">
            <Sidebar />

            <main className="flex-1 p-6 text-black">
                <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-lg p-8">
                    <div className="mb-8">
                        <div className="flex justify-between items-center">
                            <h1 className="text-3xl font-bold text-gray-800">
                                {editingId ? "Edit SubCategory" : "Add SubCategory"}
                            </h1>
                            {editingId && (
                                <button onClick={cancelEdit} className="flex items-center gap-1 text-xs bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1.5 rounded-full font-semibold transition">
                                    <X size={14} /> Cancel Edit
                                </button>
                            )}
                        </div>
                        <p className="text-gray-500 mt-2">Create subcategories inside parent categories</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Select Parent Category</label>
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-400 rounded-lg outline-none text-black focus:ring-1 focus:ring-black"
                                required
                            >
                                <option value="">-- Choose Category --</option>
                                {categories.map((cat) => (
                                    <option key={cat._id} value={cat._id}>{cat.name}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">SubCategory Name</label>
                            <div className="relative text-black">
                                <Tag className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={20} />
                                <input
                                    type="text"
                                    placeholder="Enter subcategory name"
                                    value={subCategoryName}
                                    onChange={(e) => setSubCategoryName(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 border border-gray-400 rounded-lg outline-none focus:ring-1 focus:ring-black"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                            <textarea
                                placeholder="Enter description details..."
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                rows={3}
                                className="w-full px-4 py-3 border border-gray-400 rounded-lg outline-none text-black focus:ring-1 focus:ring-black"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">SubCategory Image</label>
                            <label className="border-2 border-dashed border-gray-300 rounded-3xl p-8 flex flex-col items-center justify-center cursor-pointer hover:border-black transition">
                                <UploadCloud className="text-gray-600 mb-3" size={40} />
                                <p className="text-gray-600 font-medium">Click to upload image</p>
                                <span className="text-sm text-gray-400 mt-1">PNG, JPG, JPEG</span>
                                <input type="file" accept="image/*, .heic, .heif, .webp, .png, .jpg, .jpeg, .gif" onChange={handleImageChange} className="hidden" />
                            </label>
                            
                            {previewUrl && (
                                <div className="mt-5">
                                    <p className="text-sm font-semibold text-gray-700 mb-3">Preview</p>
                                    <div className="relative w-full h-64 rounded-3xl overflow-hidden border">
                                        <Image src={previewUrl} alt="Preview" fill className="object-cover" />
                                        
                                        {/* Compression Stats Overlay */}
                                        {isPreviewObj && (
                                            <div className="absolute top-0 left-0 bg-black/75 backdrop-blur-sm p-2.5 rounded-br-2xl text-[10px] font-mono text-white leading-tight shadow border-r border-b border-white/10 z-10">
                                                <div>Original: {(imagePreview.originalSize / 1024 / 1024).toFixed(2)} MB</div>
                                                <div className="text-[#34d399] font-bold mt-0.5">WEBP: {(imagePreview.newSize / 1024).toFixed(1)} KB</div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>

                        <button 
                            type="submit" 
                            disabled={submitting} 
                            className="w-full bg-black text-white py-3 rounded-2xl font-semibold hover:opacity-90 transition flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed"
                        >
                            {submitting ? (
                                <>
                                    <Loader2 className="animate-spin" size={20} />
                                    {editingId ? "Updating..." : "Adding..."}
                                </>
                            ) : (
                                editingId ? "Update SubCategory" : "Add SubCategory"
                            )}
                        </button>
                    </form>
                </div>
            </main>

            <main className="flex-1 p-6">
                <h2 className="text-2xl font-bold text-black mb-4">All SubCategories</h2>
                {loading && subCategories.length === 0 ? <p className="text-gray-800">Loading...</p> : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {subCategories.map((subCat) => (
                            <div key={subCat._id} className="bg-white rounded-3xl shadow-md overflow-hidden border border-gray-200">
                                <div className="relative h-52 w-full">
                                    <Image src={subCat.image} alt={subCat.name} fill className="object-cover" />
                                </div>
                                <div className="px-5 py-3">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="text-lg font-bold text-black">{subCat.name}</h3>
                                            <p className="text-xs text-blue-600 font-bold uppercase tracking-wider mt-0.5">
                                                Parent: {subCat.category?.name || "None"}
                                            </p>
                                            <p className="text-sm text-gray-500 mt-1">{subCat.description}</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <button onClick={() => handleEdit(subCat)} className="p-3 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition">
                                                <Pencil size={18} />
                                            </button>
                                            <button onClick={() => deleteSubCategory(subCat._id)} className="p-3 rounded-full bg-red-50 text-red-600 hover:bg-red-100 transition">
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
}
