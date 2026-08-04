"use client";

import { useState } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Why Choose Us", href: "/why" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="logo" className="h-10" />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-700">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="hover:text-blue-600">
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right Side (Desktop) */}
        <div className="hidden lg:flex items-center gap-4">

          {/* Phone */}
          <a
            href="tel:+91810422935"
            className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-blue-600"
          >
            <Phone size={16} />
            +91 81042 22935
          </a>

          {/* Quote Button */}
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-700">
            GET BULK QUOTE
          </button>

          {/* WhatsApp */}
          <a
            href="https://wa.me/91810422935"
            target="_blank"
            className="bg-green-500 p-2 rounded-full text-white hover:bg-green-600"
          >
            <MessageCircle size={18} />
          </a>
        </div>

        {/* Mobile Right */}
        <div className="flex lg:hidden items-center gap-3">

          {/* Call */}
          <a
            href="tel:+91810422935"
            className="bg-blue-100 p-2 rounded-full text-blue-600"
          >
            <Phone size={18} />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/91810422935"
            className="bg-green-500 p-2 rounded-full text-white"
          >
            <MessageCircle size={18} />
          </a>

          {/* Menu Toggle */}
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
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
          <button className="w-full mt-3 bg-blue-600 text-white py-2 rounded-md font-semibold">
            GET BULK QUOTE
          </button>
        </div>
      )}
    </header>
  );
}