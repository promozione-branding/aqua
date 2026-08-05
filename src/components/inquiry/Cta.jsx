"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Popup from "../Popup";

export default function Cta() {
      const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section className="bg-[#f5f7fb] text-white py-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto rounded-2xl bg-blue-700 p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">
          <h2 className="text-xl md:text-3xl font-bold leading-snug mb-3">
            Looking for High-Quality <br className="hidden md:block" />
            RO Spare Parts?
          </h2>

          <p className="text-sm md:text-base text-blue-100">
            Get the best products at competitive prices with reliable delivery.
          </p>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          
          <button
            onClick={()=>{setIsFormOpen(true)}}
            className="text-center bg-white text-blue-600 px-6 py-3 rounded-full text-sm font-semibold hover:bg-blue-100 transition"
          >
            Bulk Order ?
          </button>

          <Link
            href="https://wa.link/jqmslb"
            target="_blank"
            className="flex items-center justify-center gap-2 border border-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-white hover:text-blue-600 transition"
          >
            <FaWhatsapp size={18} />
            WhatsApp Now
          </Link>

        </div>
      </div>

       {isFormOpen && (                   
      <Popup isOpen={isFormOpen} onClose={() => setIsFormOpen(false)}/>
         )}
    </section>
  );
}