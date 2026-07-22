"use client";

import React from 'react'
import Link from "next/link";

import {
    LayoutDashboard,
    Boxes,
    PackagePlus,
    ShoppingBag,
    LogOut,
} from "lucide-react";
import { useRouter } from 'next/navigation';

export default function Sidebar() {
    const router = useRouter();
    const handleLogout = () => {
        document.cookie =
            "admin-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        router.push("/admin/login");
    };
    return (
        <aside className="w-[260px] bg-white border-r border-gray-200 shadow-sm hidden md:flex flex-col">
            <div className="h-20 flex items-center px-6 border-b border-gray-200">
                <h1 className="text-2xl font-bold text-[#00badb]">
                    Admin Panel
                </h1>
            </div>

            {/* MENU */}
            <nav className="flex-1 px-4 py-6 space-y-2">
                <Link href="/admin/dashboard"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#00badb] hover:text-white transition-all duration-300 text-gray-700 font-medium"
                >
                    <LayoutDashboard size={20} />
                    Dashboard
                </Link>

                <Link href="/admin/categories"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#00badb] hover:text-white transition-all duration-300 text-gray-700 font-medium"
                >
                    <Boxes size={20} />
                    Categories
                </Link>

                <Link href="/admin/subcategories"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#00badb] hover:text-white transition-all duration-300 text-gray-700 font-medium"
                >
                    <Boxes size={20} />
                    SubCategories
                </Link>

                <Link href="/admin/add-product"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#00badb] hover:text-white transition-all duration-300 text-gray-700 font-medium"
                >
                    <PackagePlus size={20} />
                    Add Product
                </Link>

                <Link href="/admin/products"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#00badb] hover:text-white transition-all duration-300 text-gray-700 font-medium"
                >
                    <ShoppingBag size={20} />
                    All Products
                </Link>
            </nav>

            <div className='p-4'>
                <button onClick={handleLogout} className="flex items-center gap-3 w-full text-left bg-red-100 text-red-600 px-4 py-2 rounded-lg shadow hover:bg-red-200 transition mt-auto">
                    <LogOut size={20} />
                    Logout
                </button>
            </div>
        </aside>
    )
}
