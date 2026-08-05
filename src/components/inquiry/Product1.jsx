"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Link from "next/link";


// Swiper styles
import "swiper/css";
import { FaWhatsapp } from "react-icons/fa";
import Popup from "../Popup";

export default function Product1() {
      const [isFormOpen, setIsFormOpen] = useState(false);

  const products = [
    {
      title: "RO Cabinets",
      desc: "Premium quality cabinets in different designs",
      img: "/inquiry/1.webp",
    },
    {
      title: "Filter Housings",
      desc: "High-strength filter housings for all RO",
      img: "/inquiry/2.webp",
    },
    {
      title: "RO Spare Parts",
      desc: "All types of RO spare parts under one system.",
      img: "/inquiry/3.webp",
    },
    {
      title: "Float Valves",
      desc: "Durable & leak-proof float valves for long life.",
      img: "/inquiry/4.webp",
    },
  ];

  const features = [
    "Consistent Quality",
    "Bulk Supply Experts",
    "Competitive Pricing",
    "On-Time Delivery",
    "Dedicated Support",
  ];

  return (
    <section className="bg-[#f5f7fb] py-6 md:py-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT */}
        <div className="lg:col-span-2">
          <p className="text-xs md:text-sm text-blue-600 font-semibold uppercase">
            Our Product Range
          </p>

          <h2 className="text-xl md:text-3xl font-bold mt-2 mb-5 leading-snug">
            Built for Performance. <br className="md:hidden" />
            Made for Business.
          </h2>

          {/* Swiper */}
          <Swiper
            modules={[Autoplay]}
            spaceBetween={12}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: { slidesPerView: 2 },
              480: { slidesPerView: 2 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 2.5 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {products.map((item, i) => (
              <SwiperSlide key={i}>
                <div onClick={()=>{setIsFormOpen(true)}} className="bg-white rounded-xl border p-3 md:p-4 text-center hover:shadow-md transition h-full">
                  
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-30 md:h-50 mx-auto object-contain mb-3"
                  />

                  <h3 className="font-semibold text-sm md:text-base mb-1">
                    {item.title}
                  </h3>

                  <p className="text-xs text-gray-500 mb-3">
                    {item.desc}
                  </p>

                <div className="flex gap-2 w-full justify-center items-center mx-auto">
                  <button className=" text-blue-600 text-sm border border-blue-600 px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1 hover:bg-blue-600 hover:text-white transition">
                    VIEW <ArrowRight size={14} />
                  </button>
                  <div onClick={(e)=>{e.stopPropagation()}}>
                  <Link  href="https://wa.link/jqmslb" className=" text-blue-600 text-sm border text-green-500 border-green-600 px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1 hover:bg-blue-600 hover:text-white transition">
                     <FaWhatsapp className="" size={20} />
                  </Link>
                  </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Button */}
          <div className="flex gap-2 mt-6 text-center md:text-left">
            <button onClick={()=>{setIsFormOpen(true)}} className="border gap-2 flex justify-center items-center border-blue-600 text-blue-600 px-5 py-2 rounded-full text-sm hover:bg-blue-600 hover:text-white transition">
              VIEW ALL PRODUCTS  <ArrowRight size={14} />
            </button>

             <Link href="https://wa.link/jqmslb" className="border flex justify-center items-center gap-2 border-blue-600 text-green-600 px-5 py-2 rounded-full text-sm hover:bg-blue-600 hover:text-white transition">
              WhatsApp <FaWhatsapp className="" size={20} />
            </Link>
          </div>
        </div>

        {/* RIGHT */}
       <div className="flex items-center h-full w-full">
        <div className="bg-white  rounded-xl w-full border p-5 h-fit">
          <h3 className="text-base md:text-lg font-semibold mb-4">
            Why Partner With JNJ Aqua?
          </h3>

          <div className="space-y-3">
            {features.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 border rounded-lg p-2.5"
              >
                <div className="w-7 h-7 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full text-sm font-bold">
                  ✓
                </div>

                <p className="text-sm font-medium">{item}</p>
              </div>
            ))}
          </div>

        </div>
        </div>

      </div>

       {isFormOpen && (                   
      <Popup isOpen={isFormOpen} onClose={() => setIsFormOpen(false)}/>
         )}
    </section>
  );
}