"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import toast from "react-hot-toast";
import Sidebar from "../Sidebar";
import { Package, IndianRupee, Folder, Trash2, Edit } from "lucide-react";
import Link from "next/link";

export default function AllProductsPage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const getProducts = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get(`/api/product?t=${Date.now()}`);
            if (data.success) {
                setProducts(data.products);
            }
        } catch (error) {
            toast.error("Failed to fetch products");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    const deleteProduct = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this product?");
        if (!confirmDelete) return;

        try {
            const { data } = await axios.delete(`/api/product?id=${id}`);
            if (data.success) {
                toast.success("Product deleted successfully");
                getProducts();
            }
        } catch (error) {
            toast.error("Delete failed");
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex md:flex-row flex-col">
            <Sidebar />

            <main className="flex-1 p-6 text-black">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-gray-800 font-sans">All Products</h1>
                    <p className="text-gray-500 mt-2">Manage and list all your products catalog</p>
                </div>

                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Array.from({ length: 6 }).map((_, index) => (
                            <div key={index} className="bg-white rounded-3xl overflow-hidden shadow animate-pulse">
                                <div className="h-56 bg-gray-300" />
                                <div className="p-5 space-y-4">
                                    <div className="h-5 bg-gray-300 rounded w-3/4" />
                                    <div className="h-4 bg-gray-200 rounded w-1/2" />
                                    <div className="h-4 bg-gray-200 rounded w-full" />
                                    <div className="h-10 bg-gray-300 rounded-xl" />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : products.length === 0 ? (
                    <div className="bg-white rounded-3xl p-10 text-center shadow max-w-md mx-auto">
                        <Package className="mx-auto text-gray-400 mb-4" size={60} />
                        <h2 className="text-2xl font-bold text-gray-850">No Products Found</h2>
                        <p className="text-gray-500 mt-2">Add your first product to get started</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.map((product) => {
                            // Find the first image url from the first color variant
                            const productImg = product?.colorVariants?.[0]?.images?.[0]?.url || "/placeholder.png";
                            
                            return (
                                <div key={product._id} className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 border border-gray-200 flex flex-col justify-between">
                                    <div>
                                        <div className="relative h-60 w-full bg-gray-50">
                                            <Image
                                                src={productImg}
                                                alt={product.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>

                                        <div className="p-5">
                                            <h2 className="text-xl font-bold text-gray-800 line-clamp-1">
                                                {product.name}
                                            </h2>

                                            <div className="flex justify-between items-center mt-2">
                                                <div className="flex items-center gap-2">
                                                    <span className="flex items-center text-black font-bold text-lg">
                                                        <IndianRupee size={15} />
                                                        {product.price}
                                                    </span>
                                                    {product.discountPrice > 0 && (
                                                        <span className="flex items-center text-gray-400 line-through text-sm">
                                                            <IndianRupee size={12} />
                                                            {product.discountPrice}
                                                        </span>
                                                    )}
                                                </div>

                                                <div className="flex flex-col items-end text-gray-500 text-xs font-semibold uppercase tracking-wider">
                                                    <div className="flex items-center gap-1">
                                                        <Folder size={14} />
                                                        <span>category : {product?.category?.name || "None"}</span>
                                                    </div>
                                                    {product?.subCategory?.name && (
                                                        <span className="text-gray-400 text-[10px] mt-0.5 font-normal">
                                                            subcategory : {product.subCategory.name}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>

                                            <p className="text-gray-500 text-sm mt-3 line-clamp-2">
                                                {product.shortDescription || "No short description provided."}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="p-5 pt-0">
                                        <div className="grid grid-cols-2 gap-3 mt-2">
                                            <Link href={`/admin/products/${product.slug}`} className="bg-blue-50 hover:bg-blue-100 text-blue-600 py-3 rounded-2xl flex justify-center items-center font-bold transition">
                                                <Edit size={18} />
                                            </Link>

                                            <button onClick={() => deleteProduct(product._id)} className="bg-red-50 hover:bg-red-100 text-red-600 py-3 rounded-2xl flex justify-center items-center font-bold transition">
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </main>
        </div>
    );
}
