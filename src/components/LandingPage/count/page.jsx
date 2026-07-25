"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  {
    end: 50000,
    suffix: "+",
    label: "Units Manufactured",
  },
  {
    end: 500,
    suffix: "+",
    label: "Happy Clients",
  },
  {
    end: 50,
    suffix: "+",
    label: "Product Models",
  },
  {
    end: 15,
    suffix: "+",
    label: "Years Experience",
  },
];

function CountUpNumber({ end, suffix, isInView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp = null;
    const duration = 2000; // 2 seconds animation duration

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [end, isInView]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function CountSection() {
  const containerRef = useRef(null);
  // Trigger intersection check; fires when 20% of component is in viewport
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <section ref={containerRef} className="w-full bg-[#fafafa] py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Main Stats Bar Container */}
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-blue-600 via-blue-700 to-[#0F3580] p-8 md:p-12 shadow-xl">
          {/* Subtle Ambient Light Effect */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.08),transparent_60%)] pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-y-0 text-white text-center divide-x-0 divide-y divide-blue-500/20 lg:divide-y-0 lg:divide-x">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex flex-col items-center justify-center px-4 py-4 lg:py-0"
              >
                {/* Stat Number with Count-Up Animation */}
                <h3 className="text-4xl md:text-5xl font-black tracking-tight leading-none min-w-[120px]">
                  <CountUpNumber end={stat.end} suffix={stat.suffix} isInView={isInView} />
                </h3>
                
                {/* Stat Label */}
                <p className="text-blue-100 text-sm md:text-base mt-3 font-semibold opacity-90 tracking-wide">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
