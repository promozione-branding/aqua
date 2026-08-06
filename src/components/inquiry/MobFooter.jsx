"use client";

import { FaFileAlt,    FaWhatsapp } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { useState } from "react";
import Popup from "../Popup";


const MobFooter = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
  
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 md:hidden">
      <div className="mx-2 mb-2 rounded-2xl bg-[#f5f7fb] border border-blue-600 shadow-lg flex overflow-hidden">

        {/* Get Quote */}
        <a  href="tel:+918595776029" className="flex-1 flex flex-col items-center justify-center py-3 text-blue-700 hover:bg-blue-50 transition">
          <BiSolidPhoneCall   className="size-6 mb-1" />
          <span className="text-sm font-semibold">Call</span>
        </a>

        {/* Inquiry */}
        <button  onClick={() => {
              setIsFormOpen(true);
            }} className="flex-1 flex flex-col items-center justify-center py-3 border-x border-blue-200 text-blue-700 hover:bg-blue-50 transition">
          <FaFileAlt className="size-6 mb-1" />
          <span className="text-sm font-semibold">Get Quote</span>
        </button>

        {/* WhatsApp */}
        <a
          href="https://wa.link/jqmslb"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-3 text-blue-700 hover:bg-blue-50 transition"
        >
          <FaWhatsapp className="size-6 mb-1" />
          <span className="text-sm font-semibold">WhatsApp</span>
        </a>

      </div>

       {isFormOpen && (
              <Popup isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
            )}
    </div>
  );
};

export default MobFooter;