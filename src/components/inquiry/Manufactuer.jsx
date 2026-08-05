"use client"
import React, { useState } from "react";
import { PhoneCall } from "lucide-react";
import { MdPrecisionManufacturing } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import Popup from "../Popup";


export default function Manufactuer() {
  const features = [
    "100% Made in India",
    "Trusted by Professionals",
    "Partner in Your Business Growth",
  ];

      const [isFormOpen, setIsFormOpen] = useState(false);


  return (
    <section className="px-4 md:px-10 py-6">
      <div className="max-w-7xl mx-auto bg-gradient-to-r from-[#0b4dbb] to-[#062e6f] text-white rounded-2xl p-5 md:p-6 flex flex-col lg:flex-row items-center justify-between gap-6">

        {/* LEFT CONTENT */}
        <div className="flex items-start md:gap-4 max-w-2xl">
          
          {/* Icon Circle */}
          <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full shrink-0">
            <MdPrecisionManufacturing size={30}/>
          </div>

          <div>
            <h3 className="text-lg text-center md:text-start md:text-xl font-semibold">
              We are Manufacturer & Supplier
            </h3>

            <p className="text-sm hidden md:block md:max-w-xl text-gray-200 mt-1">
              JNJ Industries is a trusted name in the RO industry, specializing
              in the manufacturing and supply of high-quality RO Cabinets &
              Spare Parts.
            </p>
          </div>
        </div>

        {/* FEATURES */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-200">
          {features.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 border border-white/20 px-3 py-1.5 rounded-full"
            >
              ✓ {item}
            </div>
          ))}
        </div>

        {/* CONTACT BUTTON */}
        <div className="flex md:flex-col gap-2 md:gap-3">
          <button
            onClick={()=>{setIsFormOpen(true)}}
            className="inline-flex items-center gap-2 bg-white text-blue-700 px-5 md:px-4 py-2.5 rounded-full font-medium hover:bg-gray-100 transition"
          >
            <PhoneCall size={18} />
            Contact Us
          </button>
          <a
            href="https://wa.link/jqmslb"
            className="inline-flex items-center gap-2 bg-white text-blue-700 px-5 py-2.5 rounded-full font-medium hover:bg-gray-100 transition"
          >
            <FaWhatsapp size={23} />
            WhatsApp
          </a>
        </div>

      </div>
       {isFormOpen && (                   
      <Popup isOpen={isFormOpen} onClose={() => setIsFormOpen(false)}/>
         )}
    </section>
  );
}