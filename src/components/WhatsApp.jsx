'use client'
import { usePathname } from "next/navigation";
import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const WhatsApp = () => {
  const pathname = usePathname();
  
  const hideLayout =
    pathname.startsWith("/studio") ||
    pathname.startsWith("/login")

  return (
    <>
      {/* CALL BUTTON (Upper) */}
      {!hideLayout && (
        <a
          href="tel:+919540010221" // 👈 replace with your number
          aria-label="Call Corechem Corporation"
          className="fixed bottom-20 right-4 z-50 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition animate-bounce"
        >
          <FaPhoneAlt size={24} />
        </a>
      )}

      {/* WHATSAPP BUTTON (Lower) */}
      {!hideLayout && (
        <a
          href="https://wa.me/919540010221"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp with Corechem Corporation"
          className="fixed bottom-5 right-4 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition animate-bounce"
        >
          <FaWhatsapp size={26} />
        </a>
      )}
    </>
  );
};

export default WhatsApp;