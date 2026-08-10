"use client";

import { motion } from "framer-motion";
import { Download, BadgeDollarSign, Users, ArrowRight } from "lucide-react";
import Link from "next/link";
import Popup from "../Popup";
import { useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section className="relative overflow-hidden lg:h-screen bg-gradient-to-r ">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover opacity-70 
             bg-[url('/bannerMOB.webp')] 
             md:bg-[url('/banner.webp')]"
        style={{
          backgroundPosition: "50% 60%",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-2 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px] lg:min-h-[600px]">
          {/* ================= LEFT CONTENT ================= */}
          <div className="flex items-start justify-start h-full w-full">
            {/* MOBILE VIEW: Pure static HTML (0 animation, instant load) */}
            <div className="block md:hidden mt-5 w-full">
              <span className="inline-block bg-blue-100 text-blue-700 text-[13px] px-3 py-1 rounded-full font-semibold">
                • INDIA'S TRUSTED
              </span>

              <h2 className="mt-4 text-2xl sm:text-3xl font-black leading-tight">
                RO CABINET & SPARE PARTS
                <span className="text-blue-600"> MANUFACTURER</span>
              </h2>

              <p className="mt-3 text-sm font-bold text-gray-600">
                Premium Quality RO Cabinets, Spare Parts & OEM Manufacturing
                Solutions for Your Business.
              </p>

              {/* ✅ RO Images Section */}
              <div className="relative h-[200px]   flex items-end justify-center">
                {/* Left RO */}
                <Image
                  height={100}
                  width={100}
                  src="/1111.webp"
                  alt="RO 1"
                  className="absolute -left-5 -bottom-14 w-[160px] z-10 drop-shadow-2xl"
                />

                {/* Center RO */}
                <Image
                  height={100}
                  width={100}
                  src="/2222.webp"
                  alt="RO 2"
                  className="absolute left-1/2 -translate-x-1/2 -bottom-11 w-[190px] z-30 drop-shadow-[0_25px_25px_rgba(0,0,0,.35)]"
                />

                {/* Right RO */}
                <Image
                  height={100}
                  width={100}
                  src="/3333.webp"
                  alt="RO 3"
                  className="absolute -right-1 -bottom-8 w-[130px] z-20 drop-shadow-2xl"
                />
              </div>

              {/* ✅ Buttons BELOW images */}
              {/* <div className="mt-6 flex flex-row gap-3 w-full">
    <button className="border-2 text-white bg-blue-700 border-blue-700 px-4 py-3 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition w-full">
      <Download size={18} />
      DOWNLOAD CATALOGUE
    </button>

    <Link
      href="/products"
      className="border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white text-sm px-4 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition w-full"
    >
      VIEW ALL PRODUCTS
      <ArrowRight size={18} />
    </Link>
  </div> */}
            </div>

            {/* DESKTOP VIEW: Motion elements for premium look */}
            <div className="hidden md:block w-full">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{ willChange: "transform, opacity" }}
                className="mt-7"
              >
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  style={{ willChange: "transform, opacity" }}
                  className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold"
                >
                  • INDIA'S TRUSTED
                </motion.span>

                <motion.h2
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  style={{ willChange: "transform, opacity" }}
                  className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-black leading-tight"
                >
                  RO CABINET & <br />
                  SPARE PARTS
                  <br />
                  <span className="text-blue-600">MANUFACTURER</span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  style={{ willChange: "transform, opacity" }}
                  className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 max-w-xl"
                >
                  Premium Quality RO Cabinets, Spare Parts & OEM Manufacturing
                  Solutions for Your Business.
                </motion.p>

                {/* Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  style={{ willChange: "transform, opacity" }}
                  className="mt-8 sm:mt-10 flex flex-wrap gap-3 w-full sm:w-auto"
                >
                  <button
                    onClick={() => {
                      setIsFormOpen(true);
                    }}
                    className="border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white text-sm whitespace-nowrap px-4 py-3.5 rounded-lg font-bold flex items-center justify-center gap-2 transition w-full sm:w-auto"
                  >
                    <Users size={20} />
                    BECOME DISTRIBUTOR
                  </button>

                  <a
                    href="/catelogue.pdf"
                    download
                    className="border-2 cursor-pointer hover:scale-105 text-white bg-blue-700 border-gray-500 hover:border-blue-700 px-4 py-3.5 rounded-lg text-sm whitespace-nowrap font-bold flex items-center justify-center gap-2 transition w-full sm:w-auto"
                  >
                    <Download size={20} />
                    DOWNLOAD CATALOGUE
                  </a>

                  <Link
                    href="/products"
                    className="border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white text-sm whitespace-nowrap px-4 py-3.5 rounded-lg font-bold flex items-center justify-center gap-2 transition w-full sm:w-auto"
                  >
                    VIEW ALL PRODUCTS
                    <ArrowRight size={20} />
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className="relative lg:flex hidden justify-center items-end h-[600px]"
          >
            {/* White Platform */}
            <div className="absolute bottom-5 w-[550px] h-[120px] rounded-full " />

            {/* Products Group */}
            <div className="relative w-[520px] h-[480px]">
              {/* Left RO */}
              <Image
                height={100}
                width={100}
                src="/1111.webp"
                alt="RO 1"
                className="absolute bottom-12 -left-17 w-[250px] z-10 drop-shadow-2xl "
              />

              {/* Center RO */}
              <Image
                height={100}
                width={100}
                src="/2222.webp"
                alt="RO 2"
                className="absolute bottom-8 -right-30 -translate-x-1/2 w-[380px] z-30 drop-shadow-[0_35px_35px_rgba(0,0,0,.35)]"
              />

              {/* Right RO */}
              <Image
                height={100}
                width={100}
                src="/3333.webp"
                alt="RO 3"
                className="absolute bottom-22 -right-10 w-[180px] z-20 drop-shadow-2xl "
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Water */}

      {isFormOpen && (
        <Popup isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      )}
    </section>
  );
}
