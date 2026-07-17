"use client"
import { useState } from "react";
import {
  Home,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Star,
  Layers,
  ShieldCheck,
  Sparkles,
  Wrench,
  Droplet,
  Sun,
  Gem,
  CheckCircle2,
  MessageCircle,
  Download,
  Package,
  DollarSign,
  Truck,
  MapPin,
} from "lucide-react";
import Image from "next/image";

const thumbnails = [
  { fill: "#0f3a6e", stroke: "#8fb4de" },
  { fill: "#1c5aa6", stroke: "#8fb4de" },
  { fill: "#eaf3fb", stroke: "#8fb4de" },
  { fill: "#1c5aa6", stroke: "#8fb4de" },
  { fill: "#0f3a6e", stroke: "#8fb4de" },
];

const quickFeatures = [
  { icon: Layers, label: "Food Grade\nABS Material" },
  { icon: ShieldCheck, label: "Leak Proof\nDesign" },
  { icon: Sparkles, label: "Elegant\nLook" },
  { icon: Wrench, label: "Easy\nInstallation" },
];

const specs = [
  ["Storage Capacity", "12L"],
  ["Material", "ABS Food Grade"],
  ["Mounting Type", "Wall Mounting"],
  ["Color", "White with Blue"],
  ["Dimensions (mm)", "L 430 x W 250 x H 520"],
  ["Weight", "3.5 Kg (Approx.)"],
  ["Suitable For", "All Domestic RO Systems"],
  ["Product Code", "CI-ASC-12L"],
];

const productFeatures = [
  { icon: ShieldCheck, title: "High Quality ABS Material", desc: "Strong & durable construction" },
  { icon: Droplet, title: "Leak Proof & Rust Proof", desc: "100% safe for long term usage" },
  { icon: Sparkles, title: "Elegant & Modern Design", desc: "Enhances the look of your RO" },
  { icon: Wrench, title: "Easy Installation & Maintenance", desc: "User friendly design for hassle free use" },
  { icon: Sun, title: "UV Stabilized Body", desc: "Protects from harmful UV rays" },
  { icon: Gem, title: "Smooth & Glossy Finish", desc: "Easy to clean and maintain" },
];

const checklist = [
  "Suitable for 12L Storage RO Systems",
  "Made from Food Grade ABS Material",
  "Leak Proof, Rust Proof & UV Stabilized",
  "Easy to Install and Clean",
  "Smooth Finish with Elegant Looks",
];

const categories = [
  { label: "Water Purifiers" },
  { label: "RO Components" },
  { label: "OEM Solutions" },
];

const subCategories = [
  { label: "ABS RO Cabinets", active: true },
  { label: "Transparent Cabinets", active: false },
  { label: "Designer RO Cabinets", active: false },
  { label: "LED Display Cabinets", active: false },
];

const relatedProducts = [
  { name: "Crystal Premium Cabinet", image:"/1.png", storage: "10L", tile: "#111827",  },
  { name: "Elite Plus Cabinet",image:"/2.png", storage: "15L", tile: "#111827", body: "#22262d", stroke: "#454f5c", accent: "#3ad0ff" },
  { name: "LED Display Cabinet", image:"/3.png",storage: "12L", tile: "#111827", body: "#191d23", stroke: "#3a4552", accent: "#3ad0ff" },
  { name: "Transparent Cabinet", image:"/4.png",storage: "12L", tile: "#eef4fb", body: "#eef4fb", stroke: "#9fbfe2", accent: "#8fb4de" },
  { name: "Copper Plus Cabinet",image:"/5.png", storage: "12L", tile: "#f3e6da", body: "#f3e6da", stroke: "#d3ad8c", accent: "#b97a4a" },
  { name: "Classic White Cabinet",image:"/7.png", storage: "10L", tile: "#eef4fb", body: "#ffffff", stroke: "#8fb4de", accent: "#0f3a6e" },
];

const perks = [
  { icon: ShieldCheck, label: "Best Quality Products" },
  { icon: DollarSign, label: "Competitive Prices" },
  { icon: Truck, label: "On-Time Delivery" },
  { icon: MapPin, label: "PAN India Supply" },
];

function StarRating({ value = 4.8, count = 125 }) {
  return (
    <div className="flex items-center gap-2 mt-3">
      <div className="flex text-amber-400">
        {[0, 1, 2, 3, 4].map((i) => (
          <Star
            key={i}
            className="w-4 h-4"
            fill={i < Math.round(value) ? "currentColor" : "none"}
            strokeWidth={1.5}
          />
        ))}
      </div>
      <span className="text-sm font-semibold text-slate-700">{value}</span>
      <span className="text-sm text-slate-400">({count} Reviews)</span>
    </div>
  );
}

function DeviceIllustration() {
  return (
    <svg viewBox="0 0 240 320" className="w-56 drop-shadow-xl">
      <ellipse cx="120" cy="300" rx="70" ry="10" fill="#9dc2e6" opacity="0.4" />
      <rect x="35" y="20" width="170" height="255" rx="26" fill="#ffffff" stroke="#c9dcf0" strokeWidth="2" />
      <rect x="55" y="40" width="130" height="40" rx="10" fill="#0f3a6e" />
      <circle cx="72" cy="60" r="6" fill="#3ad0ff" />
      <rect x="90" y="53" width="55" height="6" rx="3" fill="#2a5f9e" />
      <rect x="90" y="64" width="35" height="5" rx="2.5" fill="#3a76b8" />
      <rect x="35" y="120" width="170" height="18" fill="#1c5aa6" />
      <text x="120" y="182" textAnchor="middle" fontFamily="sans-serif" fontWeight="800" fontSize="22" fill="#0f3a6e" letterSpacing="1">
        AQUA
      </text>
      <text x="120" y="206" textAnchor="middle" fontFamily="sans-serif" fontWeight="700" fontSize="15" fill="#1c5aa6" letterSpacing="4">
        SMART
      </text>
      <rect x="35" y="225" width="170" height="14" fill="#1c5aa6" />
      <circle cx="120" cy="252" r="20" fill="#0f3a6e" />
      <circle cx="120" cy="252" r="13" fill="#3ad0ff" opacity="0.85" />
      <rect x="112" y="272" width="16" height="22" rx="4" fill="#7fa9d4" />
    </svg>
  );
}

export default function ProductPage() {
  const [activeThumb, setActiveThumb] = useState(0);
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="bg-slate-50 text-slate-700 min-h-screen">
      {/* BREADCRUMB */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-2 text-sm text-slate-500">
          <Home className="w-4 h-4 text-blue-800" />
          <a href="#" className="hover:text-blue-800">Home</a>
          <span className="text-slate-300">/</span>
          <a href="#" className="hover:text-blue-800">Products</a>
          <span className="text-slate-300">/</span>
          <a href="#" className="hover:text-blue-800">RO Cabinets</a>
          <span className="text-slate-300">/</span>
          <span className="text-black font-medium">Aqua Smart Cabinet</span>
        </div>
      </div>

      {/* PRODUCT MAIN */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-12 gap-12">
          {/* Gallery */}
          <div className="col-span-6">
            <div className="relative rounded-2xl border border-slate-200 aspect-[4/5] flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-blue-100">
              <span className="absolute top-5 left-5 bg-blue-900 text-white text-xs font-bold tracking-wide px-3 py-1.5 rounded-md">
                BEST SELLER
              </span>

              <button
                aria-label="Previous image"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center text-blue-900 hover:bg-blue-50 transition"
                onClick={() => setActiveThumb((p) => (p - 1 + thumbnails.length) % thumbnails.length)}
              >
                <ChevronLeft className="w-4 h-4" strokeWidth={2.5} />
              </button>
              <button
                aria-label="Next image"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center text-blue-900 hover:bg-blue-50 transition"
                onClick={() => setActiveThumb((p) => (p + 1) % thumbnails.length)}
              >
                <ChevronRight className="w-4 h-4" strokeWidth={2.5} />
              </button>

              <Image src="/1.png" fill className="h-full w-full object-cover" />
            </div>

            <div className="grid grid-cols-5 gap-3 mt-4">
              {thumbnails.map((t, i) => (
                <button
                  key={i}
                  onClick={() => setActiveThumb(i)}
                  className={`aspect-square rounded-lg border-2 flex items-center justify-center p-2 bg-gradient-to-br from-white to-blue-100 transition ${
                    activeThumb === i ? "border-blue-700" : "border-slate-200 hover:border-blue-300"
                  }`}
                >
                  <svg viewBox="0 0 60 80" className="w-8">
                    <rect x="10" y="6" width="40" height="66" rx="8" fill="#fff" stroke={t.stroke} strokeWidth="1.5" />
                    <rect x="16" y="14" width="28" height="9" rx="3" fill={t.fill} />
                  </svg>
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="col-span-6">
            <h1 className="text-3xl font-extrabold text-blue-950 tracking-tight">Aqua Smart Cabinet</h1>
            <p className="text-slate-500 mt-1.5">Premium ABS RO Cabinet</p>

            <StarRating value={4.8} count={125} />

            <div className="grid grid-cols-4 gap-3 mt-6 pb-6 border-b border-slate-200">
              {quickFeatures.map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center text-center gap-2">
                  <div className="w-11 h-11 rounded-full bg-blue-50 flex items-center justify-center text-blue-800">
                    <Icon className="w-5 h-5" strokeWidth={1.8} />
                  </div>
                  <span className="text-xs font-medium text-slate-600 leading-tight whitespace-pre-line">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mt-6">
              Aqua Smart Cabinet is made from high-quality ABS food grade material with elegant design
              and superior finish. It is suitable for all types of RO systems and ensures long-lasting
              performance and durability.
            </p>

            <div className="mt-6 rounded-xl border border-slate-200 overflow-hidden">
              <div className="bg-blue-50 px-5 py-3 border-b border-slate-200">
                <h3 className="text-sm font-bold text-blue-950 tracking-wide">KEY SPECIFICATIONS</h3>
              </div>
              <table className="w-full text-sm">
                <tbody>
                  {specs.map(([label, value], i) => (
                    <tr key={label} className={`border-b border-slate-100 last:border-b-0 ${i % 2 ? "bg-slate-50/60" : ""}`}>
                      <td className="px-5 py-2.5 text-slate-500 w-1/2">{label}</td>
                      <td className="px-5 py-2.5 text-slate-800 font-medium">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-3 gap-3 mt-6">
              <button className="flex items-center justify-center gap-2 bg-white border border-slate-300 text-slate-700 font-semibold text-sm rounded-lg py-3 hover:border-green-500 hover:text-green-600 transition">
                <MessageCircle className="w-4 h-4" />
                WHATSAPP US
              </button>
              <button className="bg-blue-900 text-white font-semibold text-sm rounded-lg py-3 hover:bg-blue-800 transition">
                GET QUOTE
              </button>
              <button className="flex items-center justify-center gap-2 bg-white border border-blue-900 text-blue-900 font-semibold text-sm rounded-lg py-3 hover:bg-blue-50 transition">
                <Download className="w-4 h-4" />
                DOWNLOAD CATALOGUE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT FEATURES */}
      <section className="bg-white border-y border-slate-200 py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-lg font-extrabold text-blue-950 tracking-wide">PRODUCT FEATURES</h2>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          <div className="grid grid-cols-6 gap-5">
            {productFeatures.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="border border-slate-200 rounded-xl p-5 hover:shadow-md hover:border-blue-200 transition">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-800 mb-4">
                  <Icon className="w-5 h-5" strokeWidth={1.8} />
                </div>
                <h3 className="text-sm font-bold text-blue-950">{title}</h3>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES / DESCRIPTION / BULK BANNER */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-12 gap-8">
          {/* Sidebar */}
          <aside className="col-span-3">
            <div className="rounded-xl border border-slate-200 overflow-hidden">
              <div className="bg-blue-900 px-5 py-3.5">
                <h3 className="text-white text-sm font-bold tracking-wide">PRODUCT CATEGORIES</h3>
              </div>
              <div className="bg-white">
                <div>
                  <button className="w-full flex items-center justify-between px-5 py-3 text-sm font-semibold text-blue-950 border-b border-slate-100">
                    RO Cabinets
                    <ChevronDown className="w-4 h-4 text-slate-400" strokeWidth={2} />
                  </button>
                  <ul className="bg-slate-50 border-b border-slate-100">
                    {subCategories.map((c) => (
                      <li key={c.label}>
                        <a
                          href="#"
                          className={`block px-8 py-2.5 text-sm ${
                            c.active
                              ? "text-blue-700 font-medium bg-white border-l-2 border-blue-700"
                              : "text-slate-500 hover:text-blue-700"
                          }`}
                        >
                          {c.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                {categories.map((c, i) => (
                  <a
                    key={c.label}
                    href="#"
                    className={`flex items-center justify-between px-5 py-3.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 ${
                      i !== categories.length - 1 ? "border-b border-slate-100" : ""
                    }`}
                  >
                    {c.label}
                    <ChevronRight className="w-4 h-4 text-slate-400" strokeWidth={2} />
                  </a>
                ))}
              </div>
            </div>
          </aside>

          {/* Description tabs */}
          <div className="col-span-5">
            <div className="flex items-center gap-8 border-b border-slate-200">
              {[
                { key: "description", label: "DESCRIPTION" },
                { key: "additional", label: "ADDITIONAL INFORMATION" },
                { key: "reviews", label: "REVIEWS (0)" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`text-sm pb-3.5 border-b-2 transition ${
                    activeTab === tab.key
                      ? "font-bold text-blue-950 border-blue-900"
                      : "font-semibold text-slate-400 border-transparent"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="pt-6">
              <p className="text-sm text-slate-600 leading-relaxed">
                Aqua Smart Cabinet is designed to provide premium look, durability and best protection
                for your RO system. Manufactured using food grade ABS material, it is 100% rust proof
                and leak proof. Its modern design fits perfectly in every home and office environment.
              </p>

              <ul className="mt-5 space-y-3">
                {checklist.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-blue-700 mt-0.5 shrink-0" strokeWidth={2} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bulk order banner */}
         <div className="col-span-4">
  <div className="relative min-h-[340px] overflow-hidden rounded-2xl bg-gradient-to-br from-blue-950 to-blue-800 p-7 flex flex-col justify-between">
    <div className="relative z-10">
      <h3 className="text-2xl font-extrabold leading-tight text-white">
        Bulk Order?
        <br />
        Get Special Pricing
      </h3>

      <p className="mt-3 max-w-[220px] text-sm leading-relaxed text-blue-100/80">
        We offer the best deals for bulk orders & distributors.
      </p>

      <button className="mt-6 rounded-lg bg-white px-5 py-3 text-xs font-bold tracking-wide text-blue-950 transition hover:bg-blue-50">
        CONTACT US NOW
      </button>
    </div>

    {/* Product Image */}
    <Image
      src="/2.png"
      alt="RO Cabinet"
      width={320}
      height={420}
      className="absolute bottom-0 right-0 z-0 w-[210px] object-contain"
    />
  </div>
</div>
        </div>
      </section>

      {/* YOU MAY ALSO LIKE */}
      <section className="bg-white py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-xl font-extrabold text-blue-950 tracking-wide">YOU MAY ALSO LIKE</h2>
            <div className="w-10 h-1 bg-blue-700 rounded-full mx-auto mt-3" />
          </div>

          <div className="relative flex items-center gap-4">
            <button className="shrink-0 w-9 h-9 rounded-full bg-blue-900 text-white flex items-center justify-center hover:bg-blue-800">
              <ChevronLeft className="w-4 h-4" strokeWidth={2.5} />
            </button>

            <div className="grid grid-cols-6 gap-4 flex-1">
              {relatedProducts.map((p) => (
                <div key={p.name} className="group border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition">
                  <div className="aspect-square flex items-center justify-center p-2" style={{ backgroundColor: p.tile }}>
                    <Image src={p.image} width={130} height={80} className="object-cover    "/>
                  </div>
                  <div className="p-4">
                    <h4 className="text-sm font-bold text-blue-950">{p.name}</h4>
                    <p className="text-xs text-slate-400 mt-1">Storage: {p.storage}</p>
                    <button className="w-full mt-3 text-xs font-bold text-blue-700 border border-blue-700 rounded-md py-2 hover:bg-blue-900 hover:text-white transition">
                      VIEW DETAILS
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button className="shrink-0 w-9 h-9 rounded-full bg-blue-900 text-white flex items-center justify-center hover:bg-blue-800">
              <ChevronRight className="w-4 h-4" strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </section>

      {/* BULK CTA STRIP */}
      <section className="bg-blue-950 py-8">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
              <Package className="w-6 h-6" strokeWidth={1.6} />
            </div>
            <div>
              <h3 className="text-white font-bold leading-tight">
                Looking For
                <br />
                RO Cabinets in Bulk?
              </h3>
              <p className="text-blue-200/70 text-xs mt-1">Get factory direct pricing with best quality products.</p>
            </div>
          </div>

          <div className="flex items-center gap-8 text-white">
            {perks.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5">
                <Icon className="w-5 h-5 text-blue-200" strokeWidth={1.6} />
                <span className="text-sm font-semibold">{label}</span>
              </div>
            ))}
          </div>

          <div className="text-right shrink-0">
            <p className="text-blue-200/70 text-xs mb-1.5">Get in Touch Today!</p>
            <button className="bg-white text-blue-950 text-xs font-bold tracking-wide px-5 py-3 rounded-lg hover:bg-blue-50 transition">
              REQUEST A QUOTE
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}