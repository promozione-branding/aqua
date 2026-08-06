"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";


// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import { FaWhatsapp } from "react-icons/fa";
import Popup from "../Popup";

export default function Product2() {
      const [isFormOpen, setIsFormOpen] = useState(false);

const products = [
  {
    title: "Alkaline Filter",
    desc: "Improves water quality",
    img: "/inquiry/5.webp",
  },
  {
    title: "CARBON FILTER",
    desc: "Flexible Carbon Filter",
    img: "/inquiry/23.webp",
  },
  {
    title: "MERLIN PER FILTER ",
    desc: "Removes Impurities",
    img: "/inquiry/7.webp",
  },
  {
    title: "MERLIN GDP PUMP",
    desc: "Powerful Water Pump",
    img: "/inquiry/8.webp",
  },
];

  return (
    <section className="bg-[#f5f7fb] py-6 md:py-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT */}
        <div className="lg:col-span-2">
          <p className="text-xs md:text-sm text-blue-600 font-semibold uppercase">
            Spare Parts Range
          </p>

          <h2 className="text-xl md:text-3xl font-bold mt-2 mb-5 leading-snug">
            Reliable Spare Parts. <br className="md:hidden" />
            Built for Long Performance.
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
                <div onClick={()=>{setIsFormOpen(true)}} className="bg-white rounded-xl border border-gray-300 p-3 md:p-3.5 text-center hover:shadow-md transition h-full">
                  
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
                                    <button className=" text-blue-600 text-sm border border-blue-600 px-4 py-1.5 rounded-lg font-semibold flex items-center gap-1 hover:bg-blue-600 hover:text-white transition">
                                      VIEW <ArrowRight size={14} />
                                    </button>
                                    <div onClick={(e)=>{e.stopPropagation()}}>
                                    <Link href="https://wa.link/jqmslb" className=" text-blue-600 text-sm border text-green-500 border-green-600 px-4 py-1.5 rounded-lg font-semibold flex items-center gap-1 hover:bg-blue-600 hover:text-white transition">
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
            <button  className="border gap-2 flex justify-center items-center border-blue-600 text-blue-600 px-5 py-2 rounded-full text-sm hover:bg-blue-600 hover:text-white transition">
              VIEW ALL PRODUCTS  <ArrowRight size={14} />
            </button>

            
             <Link href="https://wa.link/jqmslb" className="border flex justify-center items-center gap-2 border-blue-600 text-green-600 px-5 py-2 rounded-full text-sm hover:bg-blue-600 hover:text-white transition">
              WhatsApp <FaWhatsapp className="" size={20} />
            </Link>
            
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="bg-white rounded-xl border border-0.5 shadow-2xl overflow-hidden h-fit">
          <img
            src="/inquiry/about.webp"
            alt="RO Spare Parts"
            className="w-full h-90 object-cover"
          />

          {/* Optional Overlay Content */}
          <div className="p-5">
            <h3 className="text-lg font-semibold mb-2">
              Premium RO Spare Parts
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              High-quality components designed for durability,
              performance, and long-term reliability.
            </p>

            <button onClick={()=>{setIsFormOpen(true)}} className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">
              Explore Now
            </button>
          </div>
        </div>

      </div>

       {isFormOpen && (                   
      <Popup isOpen={isFormOpen} onClose={() => setIsFormOpen(false)}/>
         )}
    </section>
  );
}