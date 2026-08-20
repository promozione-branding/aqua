"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaUser, FaIndustry, FaLayerGroup } from "react-icons/fa";

const tabs = [
  {
    id: "cabinet",
    title: "RO CABINET",
  },
  {
    id: "spare",
    title: "SPARE PARTS",
  },
];

const tabContent = {
  cabinet: {
    image: "/8.png",
    imageAlt: "RO Cabinet",
    title: "RO",
    highlightedTitle: "CABINET",
    subtitle: "RO Cabinet Manufacturer in India",
    description:
      "JNJ Aqua is a leading RO Cabinet Manufacturer, offering high-quality RO cabinets and RO cabinet accessories at competitive prices. We manufacture durable and stylish Reverse Osmosis Cabinets, Domestic RO Cabinet Bodies, and customized RO cabinets to meet the requirements of RO manufacturers, suppliers, dealers, and distributors.",
    stats: [
      {
        icon: FaUser,
        number: "10+",
        label: "Engineers & Workers",
      },
      {
        icon: FaIndustry,
        number: "15+",
        label: "Years of Experience",
      },
      {
        icon: FaLayerGroup,
        number: "1500+",
        label: "Projects Completed",
      },
    ],
  },

  spare: {
    image: "/spareCta.webp",
    imageAlt: "RO Spare Parts",
    title: "RO",
    highlightedTitle: "SPARE PARTS",
    subtitle: "RO Spare Parts Manufacturer in India",
    description:
      "JNJ Aqua is a trusted RO Spare Parts Manufacturer, offering high-quality RO spare parts and components at competitive prices. We provide reliable and durable RO Water Purifier Spare Parts, RO Components, and Accessories for domestic and commercial water purification systems. Our products are manufactured with a focus on quality, performance, and long-lasting use.",
    stats: [
      {
        icon: FaUser,
        number: "10+",
        label: "Engineers & Workers",
      },
      {
        icon: FaIndustry,
        number: "15+",
        label: "Years of Experience",
      },
      {
        icon: FaLayerGroup,
        number: "1500+",
        label: "Projects Completed",
      },
    ],
  },
};

export default function RO() {
  const [activeTab, setActiveTab] = useState("cabinet");

  const content = tabContent[activeTab];

  return (
    <section className="w-full bg-white py-8 md:py-10">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col px-4 sm:px-6 lg:flex-row lg:px-8">

        {/* =====================================================
            TABS
        ====================================================== */}
        <div
          className="
            flex
            w-full
            overflow-x-auto
            border-b
            border-gray-200
            lg:w-[64px]
            lg:flex-col
            lg:overflow-visible
            lg:border-b-0
          "
        >
          {tabs.map((tab) => {
            const active = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`
                  relative
                  flex
                  min-w-[145px]
                  flex-shrink-0
                  items-center
                  justify-center
                  border-r
                  border-gray-200
                  px-3
                  py-4
                  transition-all
                  duration-300
                  lg:h-[162px]
                  lg:min-w-0
                  lg:border-b
                  lg:border-r-0
                  lg:px-0
                  lg:py-2
                  ${
                    active
                      ? "bg-[#0d3b8e] text-white"
                      : "bg-[#f5f5f5] text-gray-500 hover:bg-gray-100"
                  }
                `}
              >
                <div className="flex items-center gap-2 lg:absolute lg:inset-0 lg:flex-col lg:justify-center">
                  <span
                    className="
                      text-[15px]
                      font-medium
                      tracking-[1px]
                      lg:[writing-mode:vertical-rl]
                      lg:rotate-180
                    "
                  >
                    {tab.title}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}
        <div className="flex-1 lg:pl-10">
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[minmax(350px,43%)_1fr] md:gap-10 lg:gap-14">

            {/* =================================================
                IMAGE
            ================================================== */}
            <div className="flex w-full justify-center">
              <div className="relative w-full max-w-[480px] overflow-hidden">
                <Image
                  key={content.image}
                  height={100}
                  width={100}
                  src={content.image}
                  alt={content.imageAlt}
                  className="
                    block
                    h-100
                    w-full
                    object-contain
                  "
                />
            
              </div>
            </div>

            {/* =================================================
                RIGHT CONTENT
            ================================================== */}
            <div className="w-full">

              {/* Heading */}
              <div className="mb-5">
                <h2 className="text-[30px] font-bold leading-none tracking-tight text-[#1d2939] sm:text-[34px] md:text-[36px]">
                  {content.title}{" "}
                  <span className="text-[#0d3b8e]">
                    {content.highlightedTitle}
                  </span>
                </h2>

                <p className="mt-3 text-[15px] text-[#999999]">
                  {content.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="max-w-[650px] text-[14px] leading-6 text-[#333333]">
                {content.description}
              </p>

              {/* =================================================
                  STATS
              ================================================== */}
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
                {content.stats.map((stat, index) => {
                  const Icon = stat.icon;

                  return (
                    <div
                      key={index}
                      className="
                        flex
                        min-h-[190px]
                        flex-col
                        items-center
                        justify-center
                        border
                        border-[#dddddd]
                        bg-white
                        px-3
                        py-5
                        text-center
                        transition-all
                        duration-300
                        hover:scale-105
                        hover:border-[#0d3b8e]
                      "
                    >
                      {/* Icon */}
                      <div
                        className="
                          flex
                          h-20
                          w-20
                          items-center
                          justify-center
                          rounded-full
                          bg-[#0d3b8e]
                          text-white
                        "
                      >
                        <Icon className="text-[26px]" />
                      </div>

                      {/* Number */}
                      <div className="mt-3 text-[28px] font-normal leading-none text-[#0d3b8e]">
                        {stat.number}
                      </div>

                      {/* Label */}
                      <p className="mt-4 text-[13px] text-[#333333]">
                        {stat.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}