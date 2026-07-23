"use client";

import { useEffect, useState, useMemo } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Package, IndianRupee, UploadCloud, X, Loader2, Plus, Trash2 } from "lucide-react";
import Sidebar from "../../Sidebar";
import axios from "axios";
import toast from "react-hot-toast";
import { useParams, useRouter } from "next/navigation";

// Dynamically import JoditEditor to prevent SSR errors
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

export default function EditProductPage() {
    const params = useParams();
    const router = useRouter();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [shortDescription, setShortDescription] = useState("");
    const [price, setPrice] = useState("");
    const [discountPrice, setDiscountPrice] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedSubCategory, setSelectedSubCategory] = useState("");
    const [slugValue, setSlugValue] = useState("");
    
    // SEO states
    const [metaTitle, setMetaTitle] = useState("");
    const [metaDescription, setMetaDescription] = useState("");

    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [filteredSubCategories, setFilteredSubCategories] = useState([]);

    // Specifications List
    const [specifications, setSpecifications] = useState([
        { key: "", value: "" }
    ]);
    
    // Color Variant State
    const [colorVariants, setColorVariants] = useState([
        {
            colorName: "",
            images: [],
            existingImages: [],
            previews: [],
        },
    ]);

    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState(false);

    // Jodit Editor Config
    const editorConfig = useMemo(() => {
        return {
            readonly: false,
            height: 350,
        };
    }, []);

    // Fetch product details, categories, subcategories
    const loadData = async () => {
        try {
            setLoading(true);
            const [catRes, subRes, prodRes] = await Promise.all([
                axios.get("/api/category"),
                axios.get("/api/subcategory"),
                axios.get(`/api/product/${params.slug}`)
            ]);

            if (catRes.data.success) setCategories(catRes.data.categories);
            if (subRes.data.success) setSubCategories(subRes.data.subCategories);

            if (prodRes.data.success) {
                const product = prodRes.data.product;
                setName(product.name || "");
                setSlugValue(product.slug || "");
                setDescription(product.description || "");
                setShortDescription(product.shortDescription || "");
                setPrice(product.price || "");
                setDiscountPrice(product.discountPrice || "");
                setSelectedCategory(product.category?._id || "");
                setSelectedSubCategory(product.subCategory?._id || "");
                setMetaTitle(product.metaTitle || "");
                setMetaDescription(product.metaDescription || "");
                
                if (product.specifications?.length > 0) {
                    setSpecifications(product.specifications);
                }
                
                if (product.colorVariants?.length > 0) {
                    setColorVariants(
                        product.colorVariants.map((variant) => ({
                            colorName: variant.colorName,
                            images: [],
                            existingImages: variant.images || [],
                            previews: (variant.images || []).map((img) => img.url),
                        }))
                    );
                }
            }
        } catch (error) {
            toast.error("Failed to load product details");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    // Filter subcategories when parent category changes
    useEffect(() => {
        if (selectedCategory) {
            const filtered = subCategories.filter(
                (sub) => sub.category?._id === selectedCategory
            );
            setFilteredSubCategories(filtered);
        } else {
            setFilteredSubCategories([]);
        }
    }, [selectedCategory, subCategories]);

    // Specifications handlers
    const addSpecification = () => {
        const lastSpec = specifications[specifications.length - 1];
        if (lastSpec && (!lastSpec.key.trim() || !lastSpec.value.trim())) {
            toast.error("Please fill previous specification first");
            return;
        }
        setSpecifications([...specifications, { key: "", value: "" }]);
    };

    const removeSpecification = (index) => {
        const updated = [...specifications];
        updated.splice(index, 1);
        setSpecifications(updated);
    };

    const handleSpecChange = (index, field, value) => {
        const updated = [...specifications];
        updated[index][field] = value;
        setSpecifications(updated);
    };

    // Color variant helper handlers
    const addColorVariant = () => {
        const lastVariant = colorVariants[colorVariants.length - 1];
        if (lastVariant && !lastVariant.colorName.trim()) {
            toast.error("Please enter previous color name first");
            return;
        }
        setColorVariants([
            ...colorVariants,
            {
                colorName: "",
                images: [],
                existingImages: [],
                previews: [],
            },
        ]);
    };

    const removeColorVariant = (index) => {
        const updated = [...colorVariants];
        updated.splice(index, 1);
        setColorVariants(updated);
    };

    const handleColorChange = (index, value) => {
        const updated = [...colorVariants];
        updated[index].colorName = value;
        setColorVariants(updated);
    };

    // Image conversion helper to compress and convert to WebP client-side
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

    const handleImageChange = async (index, e) => {
        const files = Array.from(e.target.files);
        if (files.length > 0) {
            try {
                toast.loading("Converting and compressing images...", { id: "webp-convert" });
                const webpFiles = await Promise.all(
                    files.map((file) => convertToWebP(file))
                );

                const updated = [...colorVariants];
                updated[index].images = [...updated[index].images, ...webpFiles];
                
                const newPreviews = webpFiles.map((file) => ({
                    url: URL.createObjectURL(file),
                    originalSize: file.originalSize || file.size,
                    newSize: file.size,
                }));
                
                updated[index].previews = [...updated[index].previews, ...newPreviews];
                setColorVariants(updated);
                toast.success("Images compressed and converted to WebP successfully", { id: "webp-convert" });
            } catch (error) {
                console.error("Error processing images", error);
                toast.error("Failed to process one or more images", { id: "webp-convert" });
            }
        }
    };

    const removeVariantImage = (variantIndex, imageIndex) => {
        const updated = [...colorVariants];
        const previewItem = updated[variantIndex].previews[imageIndex];
        const previewUrl = typeof previewItem === "object" ? previewItem.url : previewItem;

        updated[variantIndex].previews.splice(imageIndex, 1);

        if (previewUrl && previewUrl.startsWith("blob:")) {
            // Finding index of newly uploaded file array
            const existingCount = updated[variantIndex].existingImages?.length || 0;
            const newFileIndex = imageIndex - existingCount;
            if (newFileIndex >= 0) {
                updated[variantIndex].images.splice(newFileIndex, 1);
            }
        } else {
            // Removing from existingImages array to delete on update submission
            const oldImageIndex = updated[variantIndex].existingImages?.findIndex((img) => img.url === previewUrl);
            if (oldImageIndex !== undefined && oldImageIndex >= 0) {
                updated[variantIndex].existingImages.splice(oldImageIndex, 1);
            }
        }

        setColorVariants(updated);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!selectedCategory) {
            toast.error("Category is required");
            return;
        }

        try {
            setUpdating(true);
            const formData = new FormData();
            formData.append("name", name);
            if (slugValue) formData.append("slug", slugValue);
            formData.append("description", description);
            formData.append("shortDescription", shortDescription);
            formData.append("price", price);
            formData.append("discountPrice", discountPrice);
            formData.append("category", selectedCategory);
            formData.append("subCategory", selectedSubCategory);
            formData.append("metaTitle", metaTitle);
            formData.append("metaDescription", metaDescription);

            // Filter out empty key-value specifications and append stringified array
            const filteredSpecs = specifications.filter(
                (spec) => spec.key.trim() !== "" && spec.value.trim() !== ""
            );
            formData.append("specifications", JSON.stringify(filteredSpecs));

            // Append color variants structure and file arrays
            const variantData = colorVariants.map((variant) => ({
                colorName: variant.colorName,
                imageCount: variant.images.length,
                existingImages: variant.existingImages || [],
            }));
            formData.append("colorVariants", JSON.stringify(variantData));

            colorVariants.forEach((variant, variantIndex) => {
                variant.images.forEach((image) => {
                    formData.append(`variant_${variantIndex}`, image);
                });
            });

            const { data } = await axios.put(`/api/product/${params.slug}`, formData);
            if (data.success) {
                toast.success("Product Updated Successfully");
                router.push("/admin/products");
            }
        } catch (error) {
            toast.error("Failed to update product");
        } finally {
            setUpdating(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-100 flex md:flex-row flex-col">
                <Sidebar />
                <main className="flex-1 p-6 text-black flex items-center justify-center">
                    <Loader2 className="animate-spin text-gray-500 mr-2" size={24} />
                    <span>Loading Product Details...</span>
                </main>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 flex md:flex-row flex-col">
            <Sidebar />

            <main className="flex-1 p-6 text-black">
                <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg p-8">
                    <div className="mb-8 text-center">
                        <h1 className="text-3xl font-bold text-gray-800">Edit Product</h1>
                        <p className="text-gray-500 mt-2">Modify product pricing, categories, specifications, and variants</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Product Name</label>
                                <div className="relative">
                                    <Package className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                    <input
                                        type="text"
                                        placeholder="Enter product name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full pl-12 pr-4 py-3 border border-gray-400 rounded-lg outline-none focus:ring-1 focus:ring-black"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Product Slug</label>
                                <input
                                    type="text"
                                    placeholder="Enter slug value"
                                    value={slugValue}
                                    onChange={(e) => setSlugValue(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-400 rounded-lg outline-none focus:ring-1 focus:ring-black"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Price (INR) (Optional)</label>
                                <div className="relative">
                                    <IndianRupee className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                    <input
                                        type="number"
                                        placeholder="Original price"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                        className="w-full pl-12 pr-4 py-3 border border-gray-400 rounded-lg outline-none focus:ring-1 focus:ring-black"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Discount Price (INR)</label>
                                <div className="relative">
                                    <IndianRupee className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                    <input
                                        type="number"
                                        placeholder="Discounted price"
                                        value={discountPrice}
                                        onChange={(e) => setDiscountPrice(e.target.value)}
                                        className="w-full pl-12 pr-4 py-3 border border-gray-400 rounded-lg outline-none focus:ring-1 focus:ring-black"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-400 rounded-lg outline-none focus:ring-1 focus:ring-black"
                                    required
                                >
                                    <option value="">-- Choose Category --</option>
                                    {categories.map((cat) => (
                                        <option key={cat._id} value={cat._id}>{cat.name}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">SubCategory (Optional)</label>
                                <select
                                    value={selectedSubCategory}
                                    disabled={!selectedCategory}
                                    onChange={(e) => setSelectedSubCategory(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-400 rounded-lg outline-none focus:ring-1 focus:ring-black disabled:bg-gray-150 disabled:cursor-not-allowed"
                                >
                                    <option value="">-- Choose SubCategory --</option>
                                    {filteredSubCategories.map((sub) => (
                                        <option key={sub._id} value={sub._id}>{sub.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* SEO META FIELD LAYOUT */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">SEO Meta Title</label>
                                <input
                                    type="text"
                                    placeholder="Enter SEO title..."
                                    value={metaTitle}
                                    onChange={(e) => setMetaTitle(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-400 rounded-lg outline-none focus:ring-1 focus:ring-black"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">SEO Meta Description</label>
                                <textarea
                                    placeholder="Enter SEO description..."
                                    value={metaDescription}
                                    onChange={(e) => setMetaDescription(e.target.value)}
                                    rows={1}
                                    className="w-full px-4 py-3 border border-gray-400 rounded-lg outline-none focus:ring-1 focus:ring-black"
                                />
                            </div>
                        </div>

                        {/* PRODUCT SPECIFICATIONS SECTION */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <label className="text-sm font-semibold text-gray-700">Product Specifications</label>
                                <button
                                    type="button"
                                    onClick={addSpecification}
                                    className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition"
                                >
                                    <Plus size={16} /> Add Spec
                                </button>
                            </div>

                            <div className="space-y-4">
                                {specifications.map((spec, index) => (
                                    <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
                                        <input
                                            type="text"
                                            value={spec.key}
                                            onChange={(e) => handleSpecChange(index, "key", e.target.value)}
                                            placeholder="Specification Name (e.g. Material)"
                                            className="border border-gray-400 rounded-lg py-2.5 px-4 outline-none focus:ring-1 focus:ring-black text-black"
                                        />

                                        <div className="flex gap-3">
                                            <input
                                                type="text"
                                                value={spec.value}
                                                onChange={(e) => handleSpecChange(index, "value", e.target.value)}
                                                placeholder="Specification Value (e.g. Stainless Steel)"
                                                className="flex-1 border border-gray-400 rounded-lg py-2.5 px-4 outline-none focus:ring-1 focus:ring-black text-black"
                                            />

                                            {specifications.length > 1 && (
                                                <button
                                                    type="button"
                                                    onClick={() => removeSpecification(index)}
                                                    className="bg-red-100 hover:bg-red-200 text-red-600 px-3 rounded-lg"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="pb-8">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Short Description</label>
                            <textarea
                                placeholder="Enter brief product highlights..."
                                value={shortDescription}
                                onChange={(e) => setShortDescription(e.target.value)}
                                rows={8}
                                className="w-full px-4 py-3 border border-gray-400 rounded-lg outline-none focus:ring-1 focus:ring-black"
                            />
                        </div>

                        {/* RICH TEXT EDITOR FOR DESCRIPTION */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Product Description (Long Description)</label>
                            <div className="text-black bg-white rounded-lg overflow-hidden border border-gray-300">
                                <JoditEditor
                                    value={description}
                                    config={editorConfig}
                                    onBlur={(newContent) => setDescription(newContent)}
                                />
                            </div>
                        </div>

                        {/* PRODUCT COLOR VARIANTS SECTION */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <label className="text-sm font-semibold text-gray-700">Product Color Variants</label>
                                <button
                                    type="button"
                                    onClick={addColorVariant}
                                    className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition"
                                >
                                    <Plus size={16} />
                                    Add Color Variant
                                </button>
                            </div>

                            {colorVariants.map((variant, index) => (
                                <div key={index} className="border rounded-2xl p-5 bg-white shadow-sm space-y-4">
                                    <div className="flex justify-between items-center">
                                        <h3 className="font-semibold text-gray-700">Variant #{index + 1}</h3>
                                        {colorVariants.length > 1 && (
                                            <button 
                                                type="button" 
                                                onClick={() => removeColorVariant(index)} 
                                                className="text-red-500 hover:text-red-700"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        )}
                                    </div>

                                    <input
                                        type="text"
                                        placeholder="Color Name (e.g. Red, Black, Metallic)"
                                        value={variant.colorName}
                                        onChange={(e) => handleColorChange(index, e.target.value)}
                                        className="w-full border border-gray-400 rounded-lg px-4 py-3 outline-none focus:ring-1 focus:ring-black text-black"
                                        required
                                    />

                                    <label className="border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer hover:border-black transition">
                                        <UploadCloud size={32} className="text-gray-500 mb-2" />
                                        <p className="text-sm text-gray-600 font-medium">Upload Images for {variant.colorName || "this color"}</p>
                                        <input type="file" multiple accept="image/*" onChange={(e) => handleImageChange(index, e)} className="hidden" />
                                    </label>

                                    {variant.previews.length > 0 && (
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                            {variant.previews.map((previewItem, i) => {
                                                const isObj = typeof previewItem === "object";
                                                const srcUrl = isObj ? previewItem.url : previewItem;
                                                const origSize = isObj && previewItem.originalSize ? (previewItem.originalSize / 1024 / 1024).toFixed(2) + " MB" : null;
                                                const newSize = isObj && previewItem.newSize ? (previewItem.newSize / 1024).toFixed(1) + " KB" : null;

                                                return (
                                                    <div key={i} className="relative h-32 rounded-xl overflow-hidden border group">
                                                        <Image src={srcUrl} alt="Preview" fill className="object-cover" />
                                                        
                                                        {/* WebP metadata overlay (only shown for newly converted images) */}
                                                        {origSize && newSize && (
                                                            <div className="absolute top-0 left-0 bg-black/75 backdrop-blur-sm p-1.5 rounded-br-lg text-[9px] font-mono text-white leading-tight shadow-md border-r border-b border-white/10 z-10">
                                                                <div className="text-gray-300">Original: {origSize}</div>
                                                                <div className="text-[#34d399] font-bold mt-0.5">WEBP: {newSize}</div>
                                                            </div>
                                                        )}

                                                        <button 
                                                            type="button" 
                                                            onClick={() => removeVariantImage(index, i)} 
                                                            className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 shadow hover:bg-red-600 transition z-20"
                                                        >
                                                            <X size={14} />
                                                        </button>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <button 
                            type="submit" 
                            disabled={updating} 
                            className="w-full bg-black text-white py-3 rounded-2xl font-semibold hover:opacity-90 transition flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed"
                        >
                            {updating ? (
                                <>
                                    <Loader2 className="animate-spin" size={20} />
                                    Updating Product...
                                </>
                            ) : (
                                "Update Product"
                            )}
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
}
