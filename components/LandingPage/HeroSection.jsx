"use client";

import { motion } from "framer-motion";
import { Download, BadgeDollarSign, Users } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden  bg-gradient-to-r ">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: "url('/banner.webp')" }} 
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-15">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* ================= LEFT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold"
            >
              • INDIA'S TRUSTED
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6 text-4xl lg:text-5xl font-black leading-tight"
            >
              RO CABINET & <br />
              SPARE PARTS
              <br />
              <span className="text-blue-600">MANUFACTURER</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6 text-lg text-gray-600 max-w-xl"
            >
              Premium Quality RO Cabinets, Spare Parts & OEM Manufacturing
              Solutions for Your Business.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-10 flex  gap-2"
            >
              <button className="bg-blue-700 hover:bg-blue-800 text-white px-2 py-4 rounded-lg font-semibold text-sm flex whitespace-nowrap  items-center gap-1 transition">
                <BadgeDollarSign size={20} />
                GET PRICE LIST
              </button>

              <button className="border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white text-sm  whitespace-nowrap px-2 py-4 rounded-lg font-semibold flex items-center gap-2 transition">
                <Users size={20} />
                BECOME DISTRIBUTOR
              </button>

              <button className="border-2 border-gray-500 hover:border-blue-700 hover:text-blue-700 px-2 py-4 rounded-lg text-sm  whitespace-nowrap font-semibold flex items-center gap-2 transition">
                <Download size={20} />
                DOWNLOAD CATALOGUE
              </button>
            </motion.div>
          </motion.div>

          {/* ================= RIGHT SIDE ================= */}
          <motion.div
  initial={{ opacity: 0, x: 100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  whileHover={{
    y: -10,
    scale: 1.03,
  }}
  className="relative flex justify-center items-end h-[600px]"
>
  {/* White Platform */}
  <div className="absolute bottom-5 w-[550px] h-[120px] rounded-full " />

  {/* Products Group */}
  <div className="relative w-[520px] h-[480px]">
    {/* Left RO */}
    <img
      src="/1.png"
      alt="RO 1"
      className="absolute bottom-31 left-0 w-[180px] z-10 drop-shadow-2xl "
    />

    {/* Center RO */}
    <img
      src="/2.png"
      alt="RO 2"
      className="absolute bottom-30 left-1/2 -translate-x-1/2 w-[280px] z-30 drop-shadow-[0_35px_35px_rgba(0,0,0,.35)]"
    />

    {/* Right RO */}
    <img
      src="/3.png"
      alt="RO 3"
      className="absolute bottom-35 right-0 w-[180px] z-20 drop-shadow-2xl "
    />
  </div>
</motion.div>
        </div>
      </div>

      {/* Bottom Water */}
      
    </section>
  );
}