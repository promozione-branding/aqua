"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  PencilRuler,
  Factory,
  Wrench,
  ShieldCheck,
  Settings2,
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

// Reusable animated card component
const RiverCard = ({ step, index }) => {
  const cardRef = useRef(null);

  // Track the scroll position of THIS specific card
  const { scrollYProgress } = useScroll({
    target: cardRef,
    // "start center" means animation starts when the top of the card hits the center of the viewport
    offset: ["start center", "end center"],
  });

  // Smooth out the border animations
  const smoothConfig = { stiffness: 150, damping: 25, restDelta: 0.001 };
  
  // Sequence the border flow: Top (0-20%), Sides (20-80%), Bottom (80-100%)
  const topWidth = useSpring(useTransform(scrollYProgress, [0, 0.2], ["0%", "50.5%"]), smoothConfig);
  const sideHeight = useSpring(useTransform(scrollYProgress, [0.2, 0.8], ["0%", "100%"]), smoothConfig);
  const bottomWidth = useSpring(useTransform(scrollYProgress, [0.8, 1], ["0%", "50.5%"]), smoothConfig);

  const Icon = step.icon;
  const isEven = index % 2 === 0;

  return (
    <div 
      ref={cardRef} 
      className={`relative flex flex-col md:flex-row md:justify-between items-center w-full z-10 py-2 ${
        isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Card Content Container */}
      <div className="w-full max-w-lg md:max-w-none md:w-[calc(50%-2rem)] mx-auto md:mx-0 relative rounded-[2rem] overflow-hidden bg-slate-200 p-[4px] shadow-sm hover:shadow-md transition-shadow duration-300">
        
        {/* === THE ANIMATED BORDERS === */}
        {/* We use thick blocks (h-16/w-16) so they completely fill the rounded corners underneath the white card, preventing any gaps */}
        
        {/* Top Split */}
        <motion.div style={{ width: topWidth }} className="absolute top-0 left-1/2 h-16 bg-blue-600 z-0 origin-left" />
        <motion.div style={{ width: topWidth }} className="absolute top-0 right-1/2 h-16 bg-blue-600 z-0 origin-right" />
        
        {/* Side Flows */}
        <motion.div style={{ height: sideHeight }} className="absolute top-0 right-0 w-16 bg-blue-600 z-0 origin-top" />
        <motion.div style={{ height: sideHeight }} className="absolute top-0 left-0 w-16 bg-blue-600 z-0 origin-top" />
        
        {/* Bottom Reunite */}
        <motion.div style={{ width: bottomWidth }} className="absolute bottom-0 right-0 h-16 bg-blue-600 z-0 origin-right" />
        <motion.div style={{ width: bottomWidth }} className="absolute bottom-0 left-0 h-16 bg-blue-600 z-0 origin-left" />

        {/* === INNER CARD === */}
        {/* Solid white card hides the thick animated blocks, revealing only a perfect 4px colored edge */}
        <div className="relative bg-white rounded-[calc(2rem-4px)] p-8 md:p-10 h-full w-full z-10 flex flex-col justify-center overflow-hidden">
          
          {/* Subtle Background Watermark */}
          <span className="absolute -bottom-4 -right-2 text-8xl md:text-9xl font-black text-blue-50 pointer-events-none select-none">
            {step.id}
          </span>

          {/* Top-Left Header Layout */}
          <div className="flex items-center gap-5 relative z-10 mb-4">
            {/* Professional Soft Icon Box */}
            <div className="w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center bg-blue-50 border border-blue-100 text-blue-600 shadow-sm">
              <Icon size={24} strokeWidth={2} />
            </div>
            
            {/* Title & Step */}
            <div>
              <span className="text-blue-600 font-bold text-xs tracking-[0.2em] uppercase block mb-1">
                Step {step.id}
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight">
                {step.title}
              </h3>
            </div>
          </div>

          {/* Description */}
          <p className="text-slate-500 text-sm md:text-base leading-relaxed relative z-10 max-w-[90%]">
            {step.desc}
          </p>

        </div>
      </div>

      {/* Center Marker Dot */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-2 border-slate-200 z-20 items-center justify-center shadow-sm">
        <motion.div 
          style={{ scale: scrollYProgress }}
          className="w-3 h-3 rounded-full bg-blue-600" 
        />
      </div>

      {/* Empty Spacer */}
      <div className="hidden md:block md:w-[calc(50%-2rem)]" />
    </div>
  );
};

export default function ManufacturingProcess() {
  const containerRef = useRef(null);

  // Track global scroll progress for the main central line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section className="relative pt-6 md:pt-10 pb-16 md:pb-20 bg-slate-50 overflow-hidden font-sans">
      
      {/* Header Section */}
      <div className="text-center mb-12 relative z-10 px-4">
        <span className="uppercase tracking-[0.2em] text-xs font-bold text-blue-600 mb-4 block">
          Our Manufacturing Process
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          From Design to{" "}
          <span className="text-blue-600">
            Delivery
          </span>
        </h2>
      </div>

      {/* Interactive Timeline Container */}
      <div ref={containerRef} className="relative max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* === THE MASTER RIVER LINE === */}
        {/* Base Track (Gray) */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[4px] -translate-x-1/2 bg-slate-200 z-0 rounded-full" />
        
        {/* Animated Fill Track (Blue) - Sits behind the cards */}
        <motion.div
          style={{ scaleY }}
          className="absolute left-1/2 top-0 bottom-0 w-[4px] -translate-x-1/2 bg-blue-600 origin-top rounded-full z-0"
        />

        {/* === THE CARDS === */}
        <div className="flex flex-col gap-8 md:gap-10">
          {processSteps.map((step, idx) => (
            <RiverCard key={step.id} step={step} index={idx} />
          ))}
        </div>
        
      </div>
    </section>
  );
}