"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Download,
  Users,
  ChevronDown,
} from "lucide-react";

export default function Navbar() {
  return (
    <>
      {/* ================= TOP BAR ================= */}
      <div className="bg-[#0D3B8E] text-white text-[13px]">
        <div className="max-w-[1280px] mx-auto px-6 h-9 flex items-center justify-between">
          <p className="hidden lg:block font-medium">
            Manufacturer of Premium RO Cabinets & Spare Parts
          </p>

          <div className="flex items-center gap-7 ml-auto">
            <Link
              href="#"
              className="flex items-center gap-2 hover:text-blue-200 transition"
            >
              <Download size={15} />
              <span>Download Catalogue</span>
            </Link>

            <Link
              href="#"
              className="hidden md:flex items-center gap-2 hover:text-blue-200 transition"
            >
              <Users size={15} />
              <span>Become a Distributor</span>
            </Link>

            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 hover:text-blue-200 transition"
            >
              <Phone size={15} />
              <span>+91 98765 43210</span>
            </a>
          </div>
        </div>
      </div>

      {/* ================= NAVBAR ================= */}

      <header className="bg-white shadow-sm">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="h-[86px] flex items-center justify-between">

            {/* Logo */}

            <Link href="/" className="flex items-center">
              {/* Replace with your logo */}
              {/* <Image
                src="/logo.png"
                alt="Logo"
                width={240}
                height={70}
                className="object-contain"
              /> */}
              <h1 className="font-bold text-3xl">JNJ AQUA</h1>
            </Link>

            {/* Menu */}

            <nav className="hidden lg:flex items-center gap-9 font-semibold text-[16px] text-gray-800 uppercase tracking-wide">

              <Link
                href="/"
                className="hover:text-[#0D3B8E] transition"
              >
                Home
              </Link>

              <Link
                href="/"
                className="hover:text-[#0D3B8E] transition"
              >
                About Us
              </Link>

              <div className="group relative cursor-pointer">
                <div className="flex items-center gap-1 hover:text-[#0D3B8E]">
                  Products
                  <ChevronDown size={15} />
                </div>

                {/* Dropdown */}

                <div className="absolute  z-[9999] left-0 top-full mt-5 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2">

                  <Link
                    href="/product"
                    className="block px-5 py-2 hover:bg-white"
                  >
                    RO Cabinet
                  </Link>

                  <Link
                    href="#"
                    className="block px-5 py-2 hover:bg-whiet"
                  >
                    Spare Parts
                  </Link>

                  
                </div>
              </div>

              <Link
                href="/"
                className="hover:text-[#0D3B8E] transition"
              >
                OEM Solutions
              </Link>

              <Link
                href="/"
                className="hover:text-[#0D3B8E] transition"
              >
                Components
              </Link>

              {/* <Link
                href="/"
                className="hover:text-[#0D3B8E] transition"
              >
                Dealer Zone
              </Link> */}

              <Link
                href="/contact"
                className="hover:text-[#0D3B8E] transition"
              >
                Contact Us
              </Link>
            </nav>

            {/* CTA */}

            <Link
              href="/"
              className="hidden lg:flex items-center justify-center bg-[#0D3B8E] hover:bg-[#0B3379] text-white font-bold uppercase text-[13px] px-7 h-12 rounded-lg transition"
            >
              Get Price List
            </Link>

          </div>
        </div>
      </header>
    </>
  );
}