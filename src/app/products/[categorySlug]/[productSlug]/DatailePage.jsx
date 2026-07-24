"use client";

import { useState } from "react";
import {
  ChevronRight,
  ChevronLeft,
  Layers,
  ShieldCheck,
  Sparkles,
  Wrench,
  Droplet,
  Sun,
  CheckCircle2,
  Download,
  Package,
  Truck,
  MapPin,
  IndianRupee,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const iconMap = {
  ShieldCheck,
  Droplet,
  Sparkles,
  Wrench,
  Sun,
  Layers
};

const quickFeatures = [
  { icon: Layers, label: "Food Grade\nABS Material" },
  { icon: ShieldCheck, label: "Leak Proof\nDesign" },
  { icon: Sparkles, label: "Elegant\nLook" },
  { icon: Wrench, label: "Easy\nInstallation" },
];

const productFeatures = [
  {
    icon: "ShieldCheck",
    title: "High Quality ABS Material",
    desc: "Strong & durable construction",
  },
  {
    icon: "Droplet",
    title: "Leak Proof & Rust Proof",
    desc: "100% safe for long term usage",
  },
  {
    icon: "Sparkles",
    title: "Elegant & Modern Design",
    desc: "Enhances the look of your RO",
  },
  {
    icon: "Wrench",
    title: "Easy Installation & Maintenance",
    desc: "User friendly design for hassle free use",
  },
  {
    icon: "Sun",
    title: "UV Stabilized Body",
    desc: "Protects from harmful UV rays",
  },
];

const checklist = [
  "Suitable for 12L Storage RO Systems",
  "Made from Food Grade ABS Material",
  "Leak Proof, Rust Proof & UV Stabilized",
  "Easy to Install and Clean",
  "Smooth Finish with Elegant Looks",
];

const perks = [
  { icon: ShieldCheck, label: "Best Quality Products" },
  { icon: IndianRupee, label: "Competitive Prices" },
  { icon: Truck, label: "On-Time Delivery" },
  { icon: MapPin, label: "PAN India Supply" },
];

const colorMap = {
  green: "#22c55e",
  blue: "#3b82f6",
  brown: "#8b4513",
  purple: "#a855f7",
  gold: "#d4af37",
  grey: "#808080",
  gray: "#808080",
  black: "#1a1a1a",
  white: "#ffffff",
  copper: "#b87333",
  red: "#ef4444",
  yellow: "#facc15",
  pink: "#ec4899",
  orange: "#f97316",
  silver: "#c0c0c0",
  rose: "#b76e79",
  plum: "#9e0a0d",
  wine: "#80304c",
  "cherry wine": "#80304c",
  "brandy rose": "#b68582",
  "casal blue": "#2F6168",
  "persian plum": "#9e0a0d",
};

const getVariantColors = (colorName) => {
  if (!colorName) return ["#ffffff"];
  const normalized = colorName.toLowerCase().trim();
  if (colorMap[normalized]) {
    return [colorMap[normalized]];
  }
  const parts = normalized.split(/[\s-]+/);
  return parts.map(p => colorMap[p] || p);
};

export default function ProductDetailClient({ product, preloadedRelated }) {
  const [activeVariantIndex, setActiveVariantIndex] = useState(0);
  const [activeThumb, setActiveThumb] = useState(0);
  const [activeTab, setActiveTab] = useState("description");

  // Sort color variants to place White and Black first
  const sortedVariants = [...(product.colorVariants || [])].sort((a, b) => {
    const nameA = (a.colorName || "").toLowerCase();
    const nameB = (b.colorName || "").toLowerCase();
    if (nameA === "white") return -1;
    if (nameB === "white") return 1;
    if (nameA === "black") return -1;
    if (nameB === "black") return 1;
    return 0;
  });

  // Load variant images
  const activeVariant = sortedVariants[activeVariantIndex] || {};
  const images = activeVariant.images?.map(img => img.url) || ["/1.png"];
  
  const selectVariant = (index) => {
    setActiveVariantIndex(index);
    setActiveThumb(0);
  };

  const handleNextImage = () => {
    if (images.length === 0) return;
    if (activeThumb < images.length - 1) {
      setActiveThumb(activeThumb + 1);
    } else if (sortedVariants.length > 1) {
      const nextVariantIdx = (activeVariantIndex + 1) % sortedVariants.length;
      setActiveVariantIndex(nextVariantIdx);
      setActiveThumb(0);
    } else {
      setActiveThumb(0);
    }
  };

  const handlePrevImage = () => {
    if (images.length === 0) return;
    if (activeThumb > 0) {
      setActiveThumb(activeThumb - 1);
    } else if (sortedVariants.length > 1) {
      const prevVariantIdx = (activeVariantIndex - 1 + sortedVariants.length) % sortedVariants.length;
      setActiveVariantIndex(prevVariantIdx);
      const prevVariant = sortedVariants[prevVariantIdx] || {};
      const prevImages = prevVariant.images?.map(img => img.url) || ["/1.png"];
      setActiveThumb(prevImages.length > 0 ? prevImages.length - 1 : 0);
    } else {
      setActiveThumb(images.length - 1);
    }
  };

  // Load dynamic specifications
  const specs = product.specifications?.map(s => [s.key, s.value]) || [
    ["Storage Capacity", "12L"],
    ["Material", "ABS Food Grade"],
  ];

  const related = preloadedRelated && preloadedRelated.length > 0 ? preloadedRelated : [
    { name: "Crystal Premium Cabinet", image: "/1.png", storage: "10L", tile: "#111827", slug: "#" },
    { name: "Elite Plus Cabinet", image: "/2.png", storage: "15L", tile: "#111827", slug: "#" },
  ];

  return (
    <div className="bg-slate-50 text-slate-700 min-h-screen overflow-x-hidden">
      {/* PRODUCT MAIN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <div className="grid grid-cols-12 gap-6 sm:gap-12">
          {/* Gallery */}
          <div className="col-span-12 lg:col-span-6 px-4 sm:px-12 lg:px-16">
            <div className="max-w-[420px] mx-auto w-full">
              <div className="relative w-full">
                <div className="relative rounded-2xl border border-slate-200 aspect-square sm:aspect-[4/5] w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-blue-100">
                  {/* Clickable side overlays for navigation */}
                  <div 
                    className="absolute left-0 top-0 w-1/2 h-full cursor-pointer z-10"
                    onClick={handlePrevImage}
                    title="Previous Image"
                  />
                  <div 
                    className="absolute right-0 top-0 w-1/2 h-full cursor-pointer z-10"
                    onClick={handleNextImage}
                    title="Next Image"
                  />

                  <Image 
                    src={images[activeThumb] || "/1.png"} 
                    fill 
                    alt={product.name}
                    className="h-full w-full object-contain p-10" 
                  />
                </div>

                <button
                  aria-label="Previous image"
                  className="absolute left-2 sm:-left-16 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white shadow-md flex items-center justify-center text-blue-900 hover:bg-blue-50 transition z-20"
                  onClick={handlePrevImage}
                >
                  <ChevronLeft className="w-4 h-4" strokeWidth={2.5} />
                </button>
                <button
                  aria-label="Next image"
                  className="absolute right-2 sm:-right-16 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white shadow-md flex items-center justify-center text-blue-900 hover:bg-blue-50 transition z-20"
                  onClick={handleNextImage}
                >
                  <ChevronRight className="w-4 h-4" strokeWidth={2.5} />
                </button>
              </div>

              {images.length > 1 && (
                <div className="grid grid-cols-5 gap-3 mt-4">
                  {images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveThumb(i)}
                      className={`aspect-square rounded-lg border-2 flex items-center justify-center p-2 bg-gradient-to-br from-white to-blue-100 transition ${
                        activeThumb === i
                          ? "border-blue-700"
                          : "border-slate-200 hover:border-blue-300"
                      }`}
                    >
                      <div className="relative w-full h-full">
                        <Image src={img} alt="thumb" fill className="object-contain" />
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="col-span-12 lg:col-span-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-blue-955 tracking-tight">
              {product.name}
            </h1>
            <p className="text-slate-500 mt-2 text-sm sm:text-base">{product.category?.name || "Premium ABS RO Cabinet"}</p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-4">
              {product.shortDescription || "Premium food-grade design."}
            </p>

            {sortedVariants && sortedVariants.length > 1 && (
              <div className="mt-6">
                <span className="text-sm font-extrabold text-slate-800 tracking-wider block mb-3 uppercase">
                  COLOUR — <span className="text-blue-600 font-extrabold uppercase">{activeVariant.colorName}</span>
                </span>
                <div className="flex flex-wrap gap-2.5 items-center">
                  {sortedVariants.map((variant, idx) => {
                    const isSelected = activeVariantIndex === idx;
                    const isWhite = variant.colorName.toLowerCase() === "white";
                    const colors = getVariantColors(variant.colorName);
                    return (
                      <button
                        key={idx}
                        onClick={() => selectVariant(idx)}
                        className={`w-7 h-7 rounded-full border shadow-sm transition-all duration-200 focus:outline-none flex items-center justify-center overflow-hidden ${
                          isSelected
                            ? "ring-2 ring-blue-600 ring-offset-2 scale-110"
                            : "border-slate-300 hover:scale-110"
                        } ${isWhite ? "bg-white" : "border-slate-800/10"}`}
                        aria-label={`Select ${variant.colorName}`}
                      >
                        {colors.length === 1 ? (
                          <div className="w-full h-full" style={{ backgroundColor: colors[0] }} />
                        ) : colors.length === 2 ? (
                          <svg viewBox="0 0 100 100" className="w-full h-full block">
                            <polygon points="0,0 100,0 0,100" fill={colors[0]} />
                            <polygon points="100,0 100,100 0,100" fill={colors[1]} />
                          </svg>
                        ) : (
                          <svg viewBox="0 0 100 100" className="w-full h-full block">
                            <rect x="0" y="0" width="33.33" height="100" fill={colors[0]} />
                            <rect x="33.33" y="0" width="33.34" height="100" fill={colors[1]} />
                            <rect x="66.67" y="0" width="33.33" height="100" fill={colors[2]} />
                          </svg>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="mt-6 rounded-xl border border-slate-200 overflow-hidden">
              <div className="bg-blue-50 px-5 py-3 border-b border-slate-200">
                <h3 className="text-sm font-bold text-blue-955 tracking-wide">
                  KEY SPECIFICATIONS
                </h3>
              </div>
              <table className="w-full text-xs sm:text-sm">
                <tbody>
                  {specs.map(([label, value], i) => (
                    <tr
                      key={label}
                      className={`border-b border-slate-100 last:border-b-0 ${i % 2 ? "bg-slate-50/60" : ""}`}
                    >
                      <td className="px-3 sm:px-5 py-2 sm:py-2.5 text-black font-medium w-1/2">
                        {label}
                      </td>
                      <td className="px-3 sm:px-5 py-2 sm:py-2.5 text-black font-medium break-words">
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-4 gap-2 sm:gap-4 mt-5 pb-5 border-b border-slate-200">
              {quickFeatures.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center text-center gap-1.5"
                >
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-blue-50 flex items-center justify-center text-blue-800">
                    <Icon className="w-4 h-4 sm:w-6 sm:h-6" strokeWidth={1.8} />
                  </div>
                  <span className="text-[10px] sm:text-sm font-medium text-slate-600 leading-tight whitespace-pre-line">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <a 
                href={`https://wa.me/919876543210?text=Hello,%20I'm%20interested%20in%20the%20${encodeURIComponent(product.name)}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center text-base justify-center gap-2 bg-green-500 border border-slate-300 text-white font-semibold rounded-lg px-4 py-3 hover:bg-green-600 hover:scale-105 duration-150 transition w-full sm:w-auto text-center"
              >
                <FaWhatsapp size={23} />
                WHATSAPP US
              </a>
              <button className="bg-blue-900 text-white font-semibold text-sm rounded-lg px-4 py-3 hover:bg-blue-800 transition w-full sm:w-auto">
                GET QUOTE
              </button>
              <button className="flex items-center justify-center gap-2 bg-white border border-blue-900 text-blue-900 font-semibold text-sm rounded-lg py-3 px-4 hover:bg-blue-50 transition w-full sm:w-auto">
                <Download className="w-5 h-5" />
                DOWNLOAD CATALOGUE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT FEATURES */}
      <section className="bg-white border-y border-slate-200 py-8 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-base sm:text-lg font-extrabold text-blue-955 tracking-wide">
              PRODUCT FEATURES
            </h2>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-5">
            {productFeatures.map(({ icon: iconName, title, desc }) => {
              const Icon = iconMap[iconName] || ShieldCheck;
              return (
                <div
                  key={title}
                  className="border border-slate-200 rounded-xl p-3 sm:p-5 hover:shadow-md hover:border-blue-200 transition"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-800 mb-3">
                    <Icon className="w-5 h-5 sm:w-7 sm:h-7" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-sm sm:text-lg font-bold text-blue-955">{title}</h3>
                  <p className="text-xs sm:text-base text-slate-500 mt-1">{desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DESCRIPTION / BULK BANNER */}
      <section className="py-8 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <div>
            <div className="flex items-center gap-8 border-b border-slate-200">
              <button
                onClick={() => setActiveTab("description")}
                className="text-sm sm:text-base pb-3 sm:pb-3.5 border-b-2 font-bold text-blue-955 border-blue-900 transition"
              >
                DESCRIPTION
              </button>
            </div>

            <div className="pt-4 sm:pt-6">
              <p className="text-sm sm:text-base text-black leading-relaxed">
                {product.description || "No full description added yet."}
              </p>

              <ul className="mt-4 space-y-2.5">
                {checklist.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm sm:text-base text-black"
                  >
                    <CheckCircle2
                      className="w-4 h-4 text-blue-500 mt-0.5 shrink-0"
                      strokeWidth={2}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bulk order banner */}
          <div className="h-full">
            <div className="relative flex min-h-[280px] sm:min-h-[340px] flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-blue-950 to-blue-800 p-5 sm:p-7">
              <div className="relative z-10 flex h-full flex-1 flex-col pr-0 sm:pr-[170px] pb-[140px] sm:pb-0">
                <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight text-white">
                  Bulk Order?
                  <br />
                  Get Special Pricing
                </h3>
                <p className="mt-3 flex-1 text-sm sm:text-base leading-relaxed text-blue-100/80">
                  We offer the best deals for bulk orders & distributors.
                </p>
                <button className="mt-4 w-fit rounded-lg bg-white px-4 py-2.5 text-xs font-bold tracking-wide text-blue-955 transition hover:bg-blue-50">
                  CONTACT US NOW
                </button>
              </div>
              <Image
                src="/2.png"
                alt="RO Cabinet"
                width={420}
                height={520}
                className="absolute bottom-0 right-0 z-0 w-[140px] sm:w-[240px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* YOU MAY ALSO LIKE */}
      <section className="bg-white py-8 sm:py-14 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-3xl font-extrabold text-blue-955 tracking-wide">
              YOU MAY ALSO LIKE
            </h2>
            <div className="w-10 h-1 bg-blue-700 rounded-full mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {related.map((p, index) => (
              <Link
                key={index}
                href={`/products/${p.categorySlug || 'ro-cabinet'}/${p.slug}`}
                className="group border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition flex flex-col"
              >
                <div className="aspect-square flex items-center justify-center p-2 bg-slate-50">
                  <div className="relative w-full h-full">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="p-2 sm:p-4 flex flex-col flex-1">
                  <h4 className="text-sm sm:text-lg font-bold text-blue-955 line-clamp-1">
                    {p.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-black mt-1">
                    Storage: {p.storage}
                  </p>
                  <div className="mt-auto pt-2 block w-full text-center text-xs font-bold text-blue-700 border border-blue-700 rounded-md py-1.5 sm:py-2 group-hover:bg-blue-900 group-hover:text-white transition">
                    VIEW DETAILS
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BULK CTA STRIP */}
      <section className="bg-blue-950 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
              <Package className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.6} />
            </div>
            <div>
              <h3 className="text-white text-base sm:text-lg font-bold leading-tight">
                Looking For RO Cabinets in Bulk?
              </h3>
              <p className="text-blue-200/70 text-xs mt-1">
                Get factory direct pricing with best quality products.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:flex md:flex-wrap items-center gap-3 sm:gap-6 md:gap-8 text-white w-full md:w-auto">
            {perks.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon className="w-5 h-5 sm:w-8 sm:h-8 text-blue-200" strokeWidth={1.6} />
                <span className="text-xs sm:text-base font-semibold">{label}</span>
              </div>
            ))}
          </div>

          <div className="shrink-0 w-full md:w-auto">
            <p className="text-blue-200/70 text-xs mb-2">
              Get in Touch Today!
            </p>
            <button className="bg-white text-blue-955 text-xs font-bold tracking-wide px-5 py-2.5 sm:py-3 rounded-lg hover:bg-blue-50 transition w-full md:w-auto">
              REQUEST A QUOTE
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
