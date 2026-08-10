"use client";

import {
  ShieldCheck,
  Droplets,
  Zap,
  Wrench,
  Palette,
  BadgeCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import Popup from "../Popup";
import Image from "next/image";

const features = [
  {
    icon: ShieldCheck,
    title: "Food Grade",
    desc: "ABS Material",
  },
  {
    icon: Droplets,
    title: "Leak Proof",
    desc: "Advanced Design",
  },
  {
    icon: Zap,
    title: "Energy",
    desc: "Efficient",
  },
  {
    icon: Wrench,
    title: "Easy",
    desc: "Installation",
  },
  {
    icon: Palette,
    title: "Premium",
    desc: "Modern Designs",
  },
  {
    icon: BadgeCheck,
    title: "Strict",
    desc: "Quality Control",
  },
];

const benefits = [
  "Custom Logo Branding",
  "Premium Packaging",
  "Product Customization",
  "Bulk Manufacturing",
];

export default function WhyChooseUs() {

    const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-blue-700 py-10 md:py-14">
      {/* Background Blur */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-400/20 blur-[140px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Heading */}
        <div className="text-center px-2">
          <span className="uppercase tracking-[3px] text-blue-300 font-semibold text-xs md:text-sm">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">
            Why Buyers Choose Our Products
          </h2>
          <p className="text-blue-100 mt-4 md:mt-5 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Engineered with premium materials, precision manufacturing
            and modern technology to deliver long-lasting performance.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-6 mt-8">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-6 text-center hover:-translate-y-2 hover:bg-white/15 transition duration-300"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white flex items-center justify-center mx-auto">
                  <Icon className="text-blue-600 w-6 h-6 sm:w-[30px] sm:h-[30px]" />
                </div>
                <h4 className="text-white font-semibold mt-4 md:mt-5 text-sm sm:text-base">
                  {item.title}
                </h4>
                <p className="text-blue-100 text-xs sm:text-sm mt-1">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* OEM Banner */}
        <div className="mt-8 md:mt-9 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-white/5 border border-white/10 lg:border-none lg:bg-transparent">
          <div className="grid lg:grid-cols-2 items-center">
            {/* Left */}
            <div className="p-6 md:p-10 lg:p-8">
              <span className="bg-white/20 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm inline-block">
                OEM Manufacturing
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-5 md:mt-6 leading-tight">
                Launch Your Own
                <br />
                RO Brand
              </h2>
              <p className="text-blue-100 mt-4 md:mt-5 leading-relaxed md:leading-8 text-sm md:text-base">
                We manufacture premium RO Cabinets & Spare Parts
                for dealers, distributors, startups and
                e-commerce brands with complete OEM support.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mt-6 md:mt-8">
                {benefits.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-white text-sm md:text-base"
                  >
                    <CheckCircle2 className="text-cyan-300 shrink-0" size={20} />
                    {item}
                  </div>
                ))}
              </div>

              <button onClick={()=>{ setIsFormOpen(true);}} className="mt-8 md:mt-10 w-full md:w-auto justify-center bg-white text-blue-700 px-8 py-3.5 md:py-4 rounded-xl font-semibold flex items-center gap-3 hover:bg-blue-50 transition active:scale-95 md:active:scale-100">
                Get a Quote
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Right */}
            <div className="relative -left-2.5 sm:left-0 flex justify-center items-end h-[220px] sm:h-[310px] lg:h-[370px] pb-4 px-2 sm:px-4 w-full mt-4 lg:mt-0 overflow-hidden lg:overflow-visible">
              {/* Back Product */}
              <Image
              height={100}
                  width={100}
                src="/22.png"
                className="h-[150px] xs:h-[170px] sm:h-[230px] lg:h-[260px] w-auto object-contain rotate-[-10deg] absolute left-[15px] xs:left-[30px] sm:left-4 lg:left-2 bottom-4 drop-shadow-2xl hover:scale-105 transition duration-300"
                alt="Product 2"
              />

              {/* Center Product */}
              <Image
              height={100}
                  width={100}
                src="/1.png"
                className="h-[190px] xs:h-[215px] sm:h-[290px] lg:h-[340px] w-auto object-contain relative z-20 drop-shadow-2xl hover:-translate-y-3 transition duration-300"
                alt="Product 1"
              />

              {/* Right Product */}
              <Image
              height={100}
                  width={100}
                src="/3.png"
                className="h-[150px] xs:h-[170px] sm:h-[230px] lg:h-[260px] w-auto object-contain rotate-[10deg] absolute right-[15px] xs:right-[30px] sm:right-3 lg:right-5 bottom-4 drop-shadow-2xl hover:scale-105 transition duration-300"
                alt="Product 3"
              />
            </div>
          </div>
        </div>
      </div>

       {isFormOpen && (                   
            <Popup isOpen={isFormOpen} onClose={() => setIsFormOpen(false)}/>
               )}
    </section>
  );
}