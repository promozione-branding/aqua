"use client";

import Image from "next/image";
import { Check, Package, Droplets, Settings, Briefcase } from "lucide-react";

const categories = [
  {
    title: "RO CABINETS",
    image: "/1.png",
    icon: Package,
    color: "bg-lime-600",
    points: [
      "ABS RO Cabinets",
      "Transparent Cabinets",
      "Designer RO Cabinets",
      "LED Display Cabinets",
    ],
  },
  {
    title: "WATER PURIFIERS",
    image: "/2.png",
    icon: Droplets,
    color: "bg-amber-500",
    points: [
      "RO + UV",
      "RO + UV + UF",
      "Alkaline Water Purifiers",
      "Copper RO Purifiers",
    ],
  },
  {
    title: "RO COMPONENTS",
    image: "/3.png",
    icon: Settings,
    color: "bg-cyan-600",
    points: [
      "Pumps",
      "Membranes",
      "Filters",
      "SMPS & Controllers",
    ],
  },
  {
    title: "OEM SOLUTIONS",
    image: "/4.png",
    icon: Briefcase,
    color: "bg-purple-600",
    points: [
      "Private Label ",
      "Custom Branding",
      "Custom Cabinet Design",
      "Bulk Production",
    ],
  },
];

export default function ProductCategories() {
  return (
    <section className="py-20 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <div className="text-center mb-14">

          <span className="uppercase text-[#0D3B8E] font-bold tracking-wider text-sm">
            Our Product Categories
          </span>

          <h2 className="text-4xl font-extrabold text-gray-900 mt-2">
            Wide Range of Products & Solutions
          </h2>

          <div className="flex items-center justify-center mt-5">
            <span className="w-12 h-[2px] bg-[#0D3B8E]" />
            <span className="w-3 h-3 rounded-full bg-[#0D3B8E] mx-3" />
            <span className="w-12 h-[2px] bg-[#0D3B8E]" />
          </div>

        </div>

        {/* Cards */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {categories.map((item, index) => {
            const Icon = item.icon;

            return (
             <div
  key={index}
  className="relative bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-4 group"
>
  {/* Icon badge */}
  <div
    className={`absolute -top-7 left-7 w-14 h-14 rounded-full ${item.color} flex items-center justify-center shadow-lg ring-4 ring-white`}
  >
    <Icon className="text-white" size={24} />
  </div>

  {/* Image */}
  <div className="mt-8 flex justify-center overflow-hidden rounded-2xl bg-gray-50">
    <Image
      src={item.image}
      alt={item.title}
      width={220}
      height={170}
      className="h-[200px] w-full object-contain group-hover:scale-105 transition-transform duration-300"
    />
  </div>

  {/* Title */}
  <h3 className="text-lg font-extrabold text-gray-900 mt-5 leading-snug">
    {item.title}
  </h3>

  {/* List */}
  <ul className="mt-4 space-y-2.5">
    {item.points.map((point, i) => (
      <li
        key={i}
        className="flex items-start text-gray-600 text-[15px] leading-snug"
      >
        <Check
          size={16}
          className="text-[#0D3B8E] mr-3 mt-0.5 shrink-0"
        />
        <span>{point}</span>
      </li>
    ))}
  </ul>

  {/* Button */}
  <button className="mt-6 w-full h-12 rounded-xl bg-[#0D3B8E] hover:bg-[#09265c] active:scale-[0.98] text-white text-sm tracking-wide font-semibold transition-all">
    VIEW PRODUCTS
  </button>
</div>
            );
          })}

        </div>
      </div>
    </section>
  );
}