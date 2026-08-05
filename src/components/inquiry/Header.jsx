"use client";

import { useState } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import Popup from "../Popup";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/inquiry" },
    { name: "About Us", href: "/inquiry" },
    { name: "Products", href: "/inquiry" },
    { name: "Why Choose Us", href: "/inquiry" },
    { name: "Gallery", href: "/inquiry" },
    { name: "Contact Us", href: "/inquiry " },
  ];

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/inquiry" className="flex items-center z-50">
            <span className="text-[22px] lg:text-[25px] font-black text-slate-900 tracking-tight">
              JNJ AQUA
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-700">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-blue-600"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right Side (Desktop) */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Phone */}
          <a
            href="tel:+918595776029"
            className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-blue-600"
          >
            <Phone size={16} />
            +91 85957 76029
          </a>

          {/* Quote Button */}
          <button
            onClick={() => {
              setIsFormOpen(true);
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-700"
          >
            GET BULK QUOTE
          </button>

          {/* WhatsApp */}
          <a
            href="https://wa.link/jqmslb"
            target="_blank"
            className="bg-green-500 p-1 rounded-full text-white hover:bg-green-600"
          >
            <FaWhatsapp size={30} />
          </a>
        </div>

        {/* Mobile Right */}
        <div className="flex lg:hidden items-center gap-3">
          {/* Call */}
          <a
            href="tel:+918595776029"
            className="inline-flex items-center gap-0.5 bg-blue-100 px-2 py-2 rounded-full text-blue-700 font-medium hover:bg-blue-200 transition"
          >
            <span>
              <Phone size={18} />
            </span>
            <br />
            <span className="text-sm"> +91 85957 76029</span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.link/jqmslb"
            className="bg-green-500 p-1 rounded-full text-white"
          >
            <FaWhatsapp size={28} />
          </a>

          {/* Menu Toggle */}
          {/* <button onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button> */}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white border-t px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block text-gray-700 font-medium hover:text-blue-600"
            >
              {item.name}
            </Link>
          ))}

          {/* Mobile Button */}
          <button
            onClick={() => {
              setIsFormOpen(true);
            }}
            className="w-full mt-3 bg-blue-600 text-white py-2 rounded-md font-semibold"
          >
            GET BULK QUOTE
          </button>
        </div>
      )}

      {isFormOpen && (
        <Popup isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      )}
    </header>
  );
}
