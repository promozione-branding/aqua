"use client";

import Link from "next/link";
import { useEffect, useState, useMemo, memo } from "react";
import axios from "axios";
import {
  Phone,
  Download,
  Users,
  ChevronDown,
  ChevronRight,
  LayoutGrid,
  Settings,
  ShieldCheck,
  Menu,
  X,
} from "lucide-react";

/**
 * OPTIMIZATION: Memoized Mobile Menu 
 * - Replaced Framer Motion with native CSS Grid for 0-lag accordion.
 * - Added transform-gpu and will-change to force hardware acceleration.
 */
const MobileMenuPanel = memo(({
  isOpen,
  isProductsOpen,
  setIsMobileMenuOpen,
  setIsMobileProductsOpen,
  staticCategories,
  subcategories
}) => {
  return (
    <>
      {/* Backdrop (GPU accelerated opacity) */}
      <div
        onClick={() => setIsMobileMenuOpen(false)}
        className={`fixed inset-0 bg-slate-900/40 z-[9998] lg:hidden backdrop-blur-sm transition-opacity duration-300 transform-gpu ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ touchAction: isOpen ? "none" : "auto" }} // Prevents scroll bleed on mobile
      />

      {/* Menu Panel (Hardware accelerated slide) */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-[400px] bg-white z-[9999] shadow-2xl overflow-y-auto overscroll-none lg:hidden flex flex-col transition-transform duration-300 ease-out transform-gpu will-change-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="h-[72px] px-6 border-b border-slate-100 flex items-center justify-between shrink-0 bg-white">
          <span className="text-xl font-black text-slate-900 tracking-tight">Menu</span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 -mr-2 bg-slate-100 rounded-full text-slate-600 hover:bg-slate-200 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Mobile Links */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-2">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="py-3 text-[16px] font-bold text-slate-800 uppercase tracking-wide border-b border-slate-100">
            Home
          </Link>
          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="py-3 text-[16px] font-bold text-slate-800 uppercase tracking-wide border-b border-slate-100">
            About Us
          </Link>

          {/* CPU-Friendly Mobile Products Accordion */}
          <div className="border-b border-slate-100">
            <button
              onClick={() => setIsMobileProductsOpen(!isProductsOpen)}
              className="flex items-center justify-between w-full py-3 text-[16px] font-bold text-slate-800 uppercase tracking-wide outline-none"
            >
              <span>Products</span>
              <ChevronDown
                size={20}
                className={`transition-transform duration-300 ${
                  isProductsOpen ? "rotate-180 text-blue-600" : "text-slate-400"
                }`}
              />
            </button>

            {/* OPTIMIZATION: CSS Grid based accordion instead of Framer Motion */}
            <div 
              className="grid transition-all duration-300 ease-in-out"
              style={{ gridTemplateRows: isProductsOpen ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden">
                <div className="pb-4 pt-1 space-y-4">
                  {staticCategories.map((category) => {
                    const Icon = category.icon;
                    return (
                      <div key={category.id} className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                        <Link
                          href={`/products/${category.slug}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center gap-3 mb-2"
                        >
                          <div className="p-2.5 bg-white text-blue-600 rounded-xl shadow-sm shrink-0">
                            <Icon size={20} />
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-900">{category.name}</h4>
                            <p className="text-xs text-slate-500 normal-case">{category.description}</p>
                          </div>
                        </Link>

                        {/* Mobile Subcategories (Horizontal Scroll) */}
                        {category.hasSubcategories && subcategories.length > 0 && (
                          <div className="mt-4 pt-4 border-t border-slate-200">
                            <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-3 block">
                              Subcategories
                            </span>
                            <div className="flex gap-3 overflow-x-auto pb-2 custom-scrollbar snap-x">
                              {subcategories.map((sub) => (
                                <Link
                                  key={sub._id}
                                  href={`/products/spareparts/${sub.slug}`}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="snap-start shrink-0 w-[72px] flex flex-col items-center gap-2"
                                >
                                  <div className="w-14 h-14 bg-white rounded-full border border-slate-200 flex items-center justify-center p-2 shadow-sm shrink-0">
                                    <img
                                      src={sub.image || "/3.png"}
                                      alt={sub.name}
                                      loading="lazy" // OPTIMIZATION: Stop images from blocking thread
                                      decoding="async" 
                                      className="w-full h-full object-contain"
                                    />
                                  </div>
                                  <span className="text-[10px] font-bold text-slate-600 uppercase leading-snug tracking-tight text-center line-clamp-2">
                                    {sub.name}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                  <Link
                    href="/products"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center w-full py-3 bg-blue-50 text-blue-700 font-bold text-sm uppercase rounded-xl transition-colors active:bg-blue-100"
                  >
                    View All Products
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="py-3 text-[16px] font-bold text-slate-800 uppercase tracking-wide">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Footer CTA */}
        <div className="p-6 border-t border-slate-100 bg-slate-50 mt-auto shrink-0">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center justify-center bg-[#0D3B8E] text-white font-bold uppercase text-[14px] w-full h-12 rounded-xl shadow-md active:scale-[0.98] transition-transform"
          >
            Get Price List
          </Link>
          <a
            href="tel:+919876543210"
            className="flex items-center justify-center gap-2 mt-4 text-slate-600 font-medium text-sm"
          >
            <Phone size={16} /> Support: +91 98765 43210
          </a>
        </div>
      </div>
    </>
  );
});

MobileMenuPanel.displayName = "MobileMenuPanel";

export default function Navbar() {
  const [subcategories, setSubcategories] = useState([]);
  const [activeCategoryId, setActiveCategoryId] = useState("ro-cabinets");
  const [roCabinetImage, setRoCabinetImage] = useState("/1.png");
  const [sparePartsImage, setSparePartsImage] = useState("/3.png");
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);

  useEffect(() => {
    // OPTIMIZATION: Only adjust body overflow, prevent reflow triggers
    if (isMobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [subRes, catRes, prodRes] = await Promise.all([
          axios.get("/api/subcategory"),
          axios.get("/api/category"),
          axios.get("/api/product"),
        ]);

        if (subRes.data.success) {
          setSubcategories(subRes.data.subCategories || []);
        }

        if (catRes.data.success) {
          const categories = catRes.data.categories || [];

          const roCat = categories.find((c) => {
            const name = (c.name || "").toLowerCase();
            const slug = (c.slug || "").toLowerCase();
            return name.includes("cabinet") || name.includes("ro") || slug.includes("cabinet");
          });
          if (roCat?.image) {
            setRoCabinetImage(roCat.image);
          }

          const spareCat = categories.find((c) => {
            const name = (c.name || "").toLowerCase();
            const slug = (c.slug || "").toLowerCase();
            return name.includes("spare") || name.includes("part") || slug.includes("spare");
          });
          if (spareCat?.image) {
            setSparePartsImage(spareCat.image);
          }
        }

        if (prodRes.data.success) {
          const prods = prodRes.data.products || [];
          const roProd = prods.find((p) => {
            const catName = (p.category?.name || "").toLowerCase();
            return catName.includes("cabinet") || catName.includes("ro");
          });

          if (roProd?.colorVariants?.[0]?.images?.[0]?.url) {
            setRoCabinetImage((prev) => (prev && prev !== "/1.png" ? prev : roProd.colorVariants[0].images[0].url));
          }
        }
      } catch (error) {
        console.error("Error fetching navbar menu data from API:", error);
      }
    };
    fetchData();
  }, []);

  const staticCategories = useMemo(() => [
    {
      id: "ro-cabinets",
      name: "RO Cabinets",
      icon: LayoutGrid,
      description: "Premium transparent and designer ABS cabinets.",
      mainImage: roCabinetImage,
      slug: "ro-cabinet",
      hasSubcategories: false,
    },
    {
      id: "spare-parts",
      name: "Spare Parts",
      icon: Settings,
      description: "High-performance filters, pumps, and membranes.",
      mainImage: sparePartsImage,
      slug: "spareparts",
      hasSubcategories: true,
    },
  ], [roCabinetImage, sparePartsImage]);

  const activeCategory =
    staticCategories.find((c) => c.id === activeCategoryId) || staticCategories[0];
  const activeMainImage = activeCategory.mainImage;

  return (
    <>
      {/* ================= TOP BAR ================= */}
      <div className="bg-[#0D3B8E] text-white text-[12px] md:text-[13px] relative z-[40]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 h-9 flex items-center justify-between">
          <p className="hidden md:block font-medium truncate">
            Manufacturer of Premium RO Cabinets & Spare Parts
          </p>

          <div className="w-full md:w-auto flex items-center justify-between md:justify-end gap-4 sm:gap-7 shrink-0">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-1.5 hover:text-blue-200 transition"
            >
              <Phone size={13} />
              <span>+91 98765 43210</span>
            </a>

            <Link
              href="#"
              className="flex items-center gap-1.5 hover:text-blue-200 transition"
            >
              <Download size={14} />
              <span>Download Catalogue</span>
            </Link>
          </div>
        </div>
      </div>

      {/* ================= MAIN NAVIGATION ================= */}
      <header className="bg-white shadow-sm border-b border-slate-100 sticky top-0 z-[50]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="h-[72px] lg:h-[86px] flex items-center justify-between">
            
            {/* Logo */}
            <Link href="/" className="flex items-center z-50">
              <span className="text-[22px] lg:text-[25px] font-black text-slate-900 tracking-tight">
                JNJ AQUA
              </span>
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 -mr-2 text-slate-900 active:bg-slate-100 rounded-full transition-colors z-50"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-8 font-semibold text-[15px] text-gray-800 uppercase tracking-wide">
              <Link href="/" className="hover:text-[#0D3B8E] transition">Home</Link>
              <Link href="/about" className="hover:text-[#0D3B8E] transition">About Us</Link>

              {/* Products Mega Menu (Desktop Only) */}
              <div className="group relative py-6">
                <Link
                  href="/products"
                  className="flex items-center gap-1.5 hover:text-[#0D3B8E] cursor-pointer transition"
                >
                  <span>Products</span>
                  <ChevronDown
                    size={15}
                    className="group-hover:rotate-180 transition-transform duration-300 text-slate-500 group-hover:text-[#0D3B8E]"
                  />
                </Link>

                {/* Dropdown Container */}
                <div className="absolute z-[9999] left-1/2 -translate-x-1/2 top-full bg-white rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-[780px] border border-slate-100 overflow-hidden p-6 normal-case">
                  <div className="grid grid-cols-12 gap-6 items-stretch">
                    
                    {/* Left Side: Dynamic Preview Card */}
                    <div className="col-span-5">
                      <div className="bg-slate-50/70 rounded-2xl p-5 border border-slate-100 h-full flex flex-col justify-between">
                        <div>
                          <div className="aspect-[4/3] bg-white rounded-xl mb-4 flex items-center justify-center p-4 relative overflow-hidden shadow-sm border border-slate-100/80">
                            <img
                              key={activeCategory.id}
                              src={activeMainImage}
                              alt={activeCategory.name}
                              className="w-full h-full object-contain transition-all duration-300"
                            />
                          </div>
                          
                          <h3 className="font-bold text-slate-900 text-lg mb-1 flex items-center justify-between">
                            {activeCategory.name}
                            <ShieldCheck size={18} className="text-blue-600" />
                          </h3>

                          <p className="text-xs text-slate-500 leading-relaxed normal-case">
                            {activeCategory.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Right Side: Category Selection & Subcategories */}
                    <div className="col-span-7 flex flex-col justify-between pl-2">
                      <div>
                        {/* Header */}
                        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                          <span className="text-xs font-bold tracking-wider text-slate-900 uppercase">
                            Product Categories
                          </span>
                          <Link href="/products" className="text-xs font-semibold text-blue-600 hover:text-blue-800 transition normal-case">
                            View All
                          </Link>
                        </div>

                        {/* Category Selection List */}
                        <div className="space-y-1.5">
                          {staticCategories.map((category) => {
                            const Icon = category.icon;
                            const isActive = activeCategoryId === category.id;

                            return (
                              <div
                                key={category.id}
                                className={`group/cat rounded-xl transition-all ${
                                  isActive ? "bg-blue-50/70" : "hover:bg-slate-50"
                                }`}
                                onMouseEnter={() => setActiveCategoryId(category.id)}
                              >
                                <Link
                                  href={`/products/${category.slug}`}
                                  className="flex items-center justify-between p-3"
                                >
                                  <div className="flex items-center gap-3">
                                    <div className={`p-2 rounded-lg ${isActive ? "bg-white text-blue-600" : "bg-slate-100 text-slate-600 group-hover/cat:bg-white group-hover/cat:text-blue-600"} transition`}>
                                      <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                                    </div>
                                    <div>
                                      <span className={`font-semibold text-sm ${isActive ? "text-blue-700" : "text-slate-700"} group-hover/cat:text-blue-700`}>
                                        {category.name}
                                      </span>
                                    </div>
                                  </div>
                                  <ChevronRight
                                    size={18}
                                    className={`transition-all ${
                                      isActive ? "text-blue-600 translate-x-0" : "text-slate-300 opacity-0 -translate-x-2 group-hover/cat:opacity-100 group-hover/cat:translate-x-0"
                                    }`}
                                  />
                                </Link>
                              </div>
                            );
                          })}
                        </div>

                        {/* Subcategory Swatches */}
                        {activeCategory.hasSubcategories && subcategories.length > 0 && (
                          <div className="mt-4 pt-3 border-t border-slate-100">
                            <span className="text-xs font-bold tracking-wider text-slate-500 uppercase mb-3 block">
                              Popular Spare Parts
                            </span>
                            <div className="grid grid-cols-3 gap-2.5 max-h-[160px] overflow-y-auto pr-1 custom-scrollbar">
                              {subcategories.map((sub) => (
                                <Link
                                  key={sub._id}
                                  href={`/products/spareparts/${sub.slug}`}
                                  className="group/sub flex flex-col items-center gap-1.5 p-2 rounded-2xl hover:bg-slate-50 transition-all text-center"
                                >
                                  <div className="w-12 h-12 bg-slate-50 rounded-full border border-slate-200 flex items-center justify-center p-2 group-hover/sub:border-blue-400 group-hover/sub:bg-blue-50/50 group-hover/sub:shadow-sm transition-all overflow-hidden shrink-0">
                                    <img
                                      src={sub.image || "/3.png"}
                                      alt={sub.name}
                                      className="w-full h-full object-contain group-hover/sub:scale-105 transition-transform duration-300"
                                    />
                                  </div>
                                  <span className="text-[11px] font-bold text-slate-600 group-hover/sub:text-blue-600 uppercase leading-snug tracking-tight line-clamp-2">
                                    {sub.name}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Explore Full Catalog CTA */}
                      <div className="mt-4 pt-3 border-t border-slate-100">
                        <Link href="/products" className="group/all flex items-center justify-between px-4 py-2.5 rounded-xl bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white transition-all duration-300">
                          <span className="text-xs font-bold uppercase tracking-wide">Explore Full Catalog</span>
                          <ChevronRight size={16} className="group-hover/all:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              <Link href="/" className="hover:text-[#0D3B8E] transition">OEM Solutions</Link>
              <Link href="/" className="hover:text-[#0D3B8E] transition">Components</Link>
              <Link href="/contact" className="hover:text-[#0D3B8E] transition">Contact Us</Link>
            </nav>

            {/* Desktop CTA Button */}
            <Link
              href="/"
              className="hidden lg:flex items-center justify-center bg-[#0D3B8E] hover:bg-[#0B3379] text-white font-bold uppercase text-[13px] px-7 h-12 rounded-lg transition shadow-sm"
            >
              Get Price List
            </Link>
          </div>
        </div>

        {/* ================= MOBILE MENU OVERLAY ================= */}
        <MobileMenuPanel
          isOpen={isMobileMenuOpen}
          isProductsOpen={isMobileProductsOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          setIsMobileProductsOpen={setIsMobileProductsOpen}
          staticCategories={staticCategories}
          subcategories={subcategories}
        />
      </header>
    </>
  );
}