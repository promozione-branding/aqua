"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Phone,
  Download,
  Users,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

export default function Navbar() {
  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
    const fetchSubcategories = async () => {
      try {
        const response = await axios.get("/api/subcategory");
        if (response.data.success) {
          setSubcategories(response.data.subCategories || []);
        }
      } catch (error) {
        console.error("Error fetching subcategories:", error);
      }
    };
    fetchSubcategories();
  }, []);

  return (
    <>
      {/* ================= TOP BAR ================= */}
      <div className="bg-[#0D3B8E] text-white text-[13px]">
        <div className="max-w-[1280px] mx-auto px-6 h-9 flex items-center justify-between">
          <p className="hidden lg:block font-medium">
            Manufacturer of Premium RO Cabinets & Spare Parts
          </p>

          <div className="flex items-center gap-7 ml-auto">
            <Link
              href="#"
              className="flex items-center gap-2 hover:text-blue-200 transition"
            >
              <Download size={15} />
              Download Catalogue
            </Link>

            <Link
              href="#"
              className="hidden md:flex items-center gap-2 hover:text-blue-200 transition"
            >
              <Users size={15} />
              <span>Become a Distributor</span>
            </Link>

            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 hover:text-blue-200 transition"
            >
              <Phone size={14} />
              +91 98765 43210
            </a>
          </div>
        </div>
      </div>

      {/* ================= MAIN NAVIGATION ================= */}
      <header className="bg-white shadow-sm border-b border-slate-100 z-[999] relative">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="h-[86px] flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span className="text-[25px] font-black text-slate-900 tracking-tight">
                JNJ AQUA
              </span>
            </Link>

            {/* Menu */}
            <nav className="hidden lg:flex items-center gap-8 font-semibold text-[15px] text-gray-800 uppercase tracking-wide">
              <Link href="/" className="hover:text-[#0D3B8E] transition">
                Home
              </Link>

              <Link href="/" className="hover:text-[#0D3B8E] transition">
                About Us
              </Link>

              {/* Products Mega Menu */}
              <div className="group relative py-6">
                <Link href="/products" className="flex items-center gap-1 hover:text-[#0D3B8E] cursor-pointer">
                  Products
                  <ChevronDown size={15} className="group-hover:rotate-180 transition-transform duration-300" />
                </Link>

                {/* Mega Menu Dropdown Container */}
                <div className="absolute z-[9999] left-1/2 -translate-x-1/2 top-full bg-white rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-[700px] border border-slate-100 overflow-hidden">
                  <div className="flex">
                    
                    {/* Left Column: RO Cabinet Featured Card */}
                    <div className="flex-1 p-6 bg-slate-50 border-r border-slate-100">
                      <Link href="/products?category=ro-cabinet" className="group/item block bg-white rounded-xl p-4 shadow-sm border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-300 h-full">
                        <div className="aspect-square bg-slate-50 rounded-lg mb-4 flex items-center justify-center p-4 relative overflow-hidden">
                          <img src="/1.png" alt="RO Cabinets" className="w-full h-full object-contain group-hover/item:scale-110 transition-transform duration-500" />
                        </div>
                        <h3 className="font-bold text-slate-800 text-lg mb-1 flex items-center justify-between">
                          RO Cabinets
                          <ChevronRight size={16} className="text-blue-600 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300" />
                        </h3>
                        <p className="text-xs text-slate-500 normal-case leading-relaxed">
                          Premium quality transparent and designer ABS cabinets.
                        </p>
                      </Link>
                    </div>

                    {/* Right Column: Spare Parts Grid */}
                    <div className="flex-1 p-6 bg-white">
                      <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
                        <Link href="/products/spareparts" className="font-bold text-slate-800 hover:text-blue-600 transition-colors">
                          Spare Parts
                        </Link>
                        <Link href="/products/spareparts" className="text-xs text-blue-600 font-semibold hover:underline normal-case">
                          View All
                        </Link>
                      </div>

                      <div className="grid grid-cols-3 gap-3 max-h-[320px] overflow-y-auto pr-2 custom-scrollbar">
                        {subcategories.map((sub) => (
                          <Link key={sub._id} href={`/products/spareparts/${sub.slug}`} className="group/sub flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                            <div className="w-12 h-12 bg-slate-50 rounded-full border border-slate-100 flex items-center justify-center p-2 group-hover/sub:border-blue-200 group-hover/sub:bg-blue-50 transition-colors overflow-hidden shrink-0">
                              <img src={sub.image || "/3.png"} alt={sub.name} className="w-full h-full object-contain" />
                            </div>
                            <span className="text-xs font-semibold text-slate-600 group-hover/sub:text-blue-600 text-center uppercase leading-tight line-clamp-2">
                              {sub.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              <Link href="/" className="hover:text-[#0D3B8E] transition">
                OEM Solutions
              </Link>

              <Link href="/" className="hover:text-[#0D3B8E] transition">
                Components
              </Link>

              <Link href="/contact" className="hover:text-[#0D3B8E] transition">
                Contact Us
              </Link>
            </nav>

            {/* CTA Button */}
            <Link
              href="/"
              className="hidden lg:flex items-center justify-center bg-[#0D3B8E] hover:bg-[#0B3379] text-white font-bold uppercase text-[13px] px-7 h-12 rounded-lg transition"
            >
              Get Price List
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}