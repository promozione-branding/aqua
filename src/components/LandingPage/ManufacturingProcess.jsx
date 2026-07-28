"use client";

import React, { memo, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  Factory,
  Wrench,
  ShieldCheck,
  PackageCheck,
} from "lucide-react";

const processSteps = [
  {
    id: "01",
    title: "Design & Moulding",
    desc: "3D CAD prototyping and high-pressure injection moulding of premium food-grade ABS components.",
    icon: Factory,
  },
  {
    id: "02",
    title: "Assembly & Integration",
    desc: "Precision component assembly, ultrasonic welding, and advanced RO membrane/pump integration.",
    icon: Wrench,
  },
  {
    id: "03",
    title: "Quality Assurance",
    desc: "Rigorous multi-point pressure testing, strict leakage verification, and final cosmetic checks.",
    icon: ShieldCheck,
  },
  {
    id: "04",
    title: "Packaging & Dispatch",
    desc: "Secure, shock-proof branded packaging ready for domestic distribution and global export.",
    icon: PackageCheck,
  },
];

const RiverCard = memo(({ step, index, total, sharedProgress }) => {
  const start = index / total;
  const end = (index + 1) / total;

  const cardProgress = useTransform(sharedProgress, [start, end], [0, 1]);

  const Icon = step.icon;
  const isEven = index % 2 === 0;

  return (
    <div
      className={`relative flex items-center w-full z-10 py-3 md:py-6 ${
        isEven ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      {/* Card Wrapper */}
      <div className="w-full md:w-[calc(50%-3rem)] relative rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">

        {/* Static base border */}
        <div className="absolute inset-0 rounded-xl border-4 border-slate-200 pointer-events-none z-10" />

        {/* SVG Drawing Rounded Border to match rounded-xl perfectly */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible">
          <motion.rect
            x="2"
            y="2"
            rx="10"
            ry="10"
            fill="none"
            stroke="#2563eb"
            strokeWidth="4"
            className="w-[calc(100%-4px)] h-[calc(100%-4px)]"
            style={{ pathLength: cardProgress }}
            transition={{ ease: "linear" }}
          />
        </svg>

        {/* Inner Card */}
        <div className="relative bg-white rounded-xl p-6 md:p-10 h-full w-full z-0 flex flex-col justify-center overflow-hidden">
          <span className="absolute -bottom-4 -right-2 text-8xl md:text-9xl font-black text-blue-50 pointer-events-none select-none">
            {step.id}
          </span>

          <div className="flex items-center gap-4 md:gap-5 relative z-10 mb-4">
            <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-2xl flex items-center justify-center bg-blue-50 border border-blue-100 text-blue-600 shadow-sm">
              <Icon className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2} />
            </div>

            <div>
              <span className="text-blue-600 font-bold text-[10px] md:text-xs tracking-[0.2em] uppercase block mb-1">
                Step {step.id}
              </span>
              <h3 className="text-lg md:text-2xl font-bold text-slate-900 leading-tight">
                {step.title}
              </h3>
            </div>
          </div>

          <p className="text-slate-500 text-sm md:text-base leading-relaxed relative z-10 max-w-[95%] md:max-w-[90%]">
            {step.desc}
          </p>
        </div>
      </div>
    </div>
  );
});

RiverCard.displayName = "RiverCard";

export default function ManufacturingProcess() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Higher stiffness + damping = snappier feel, less lag on mobile
  const sharedProgress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 40,
    restDelta: 0.001,
  });

  return (
    <section className="relative pt-6 md:pt-10 pb-16 md:pb-20 bg-slate-50 overflow-hidden font-sans">
      <div className="text-center mb-12 relative z-10 px-4">
        <span className="uppercase tracking-[0.2em] text-xs font-bold text-blue-600 mb-4 block">
          Our Manufacturing Process
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          From Design to <span className="text-blue-600">Delivery</span>
        </h2>
      </div>

      <div className="px-4 sm:px-6">
        <div ref={containerRef} className="relative max-w-5xl mx-auto">

          {/* Static base track — pure CSS, zero animation cost */}
          <div className="absolute left-1/2 top-8 bottom-8 w-[6px] -translate-x-1/2 bg-slate-200 z-0 rounded-full" />

          {/* Animated fill track — scaleY on a single element, GPU composited */}
          <motion.div
            style={{ scaleY: sharedProgress }}
            className="absolute left-1/2 top-8 bottom-8 w-[6px] -translate-x-1/2 bg-blue-600 rounded-full z-0 origin-top will-change-transform"
          />

          <div className="flex flex-col gap-4 md:gap-10">
            {processSteps.map((step, idx) => (
              <RiverCard
                key={step.id}
                step={step}
                index={idx}
                total={processSteps.length}
                sharedProgress={sharedProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}