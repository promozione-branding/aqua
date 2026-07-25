"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Factory, Boxes, PencilRuler, Building2, Play, X, ArrowRight } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const featureCards = [
  { icon: Factory, title: "Advanced", subtitle: "Manufacturing Unit" },
  { icon: Boxes, title: "Modern Moulding", subtitle: "Technology" },
  { icon: PencilRuler, title: "In-house Design", subtitle: "& R&D Team" },
  { icon: Building2, title: "Large Production", subtitle: "Capacity" },
];

export default function AboutSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative py-8 md:py-12 bg-white overflow-hidden">
      {/* Background Wave - Kept subtle & compact */}
      <div className="absolute top-0 inset-x-0 pointer-events-none opacity-20">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180" className="w-full h-auto">
          <path fill="#0099ff" fillOpacity="1" d="M0,96L60,85.3C120,75,240,53,360,40C480,27,600,21,720,26.7C840,32,960,48,1080,48C1200,48,1320,32,1380,24L1440,16L1440,0L0,0Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          {/* Video / Image Box */}
          <motion.div variants={fadeUp} className="relative w-full">
            <div className="relative rounded-xl overflow-hidden shadow-lg aspect-[16/10] sm:aspect-[16/9] w-full bg-slate-900 border border-slate-100">
              <video
                src="/video/main_video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Text Content Area */}
          <motion.div variants={fadeUp} className="flex flex-col justify-center">
            {/* Category Tag */}
            <span className="text-xs font-semibold uppercase tracking-widest text-white bg-blue-700 px-3 py-1.5 rounded-3xl w-fit">
              About JNJ AQUA
            </span>

            {/* Headline */}
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Manufacturer of Premium <br className="hidden sm:inline" />
              RO Cabinets & Spare Parts
            </h2>

            {/* Paragraph Text */}
            <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed">
              JNJ Aqua is a leading manufacturer of high-quality RO Cabinets and Spare Parts. With advanced technology, modern infrastructure and strict quality control, we deliver products that ensure purity, reliability and long-lasting performance.
            </p>

            {/* Compact Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-6">
              {featureCards.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -4 }}
                    className="p-3 rounded-lg bg-slate-50 border border-slate-100 text-center transition-all"
                  >
                    <div className="flex justify-center mb-1.5 text-blue-600">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h4 className="font-semibold text-gray-900 text-xs sm:text-sm">{item.title}</h4>
                    <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5">{item.subtitle}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Action Button */}
            <div className="mt-6">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group relative inline-flex items-center gap-2 overflow-hidden bg-blue-700 px-6 py-3 rounded-md font-medium text-sm text-white shadow-md hover:bg-blue-800 transition-colors"
              >
                <div 
                  className="absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]"
                />
                <span className="relative z-10">KNOW MORE ABOUT US</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}