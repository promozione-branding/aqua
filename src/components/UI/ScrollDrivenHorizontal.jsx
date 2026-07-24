"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Scroll-driven horizontal section using GSAP x-translation + CSS sticky.
 * 
 * IMPORTANT: We intentionally do NOT use GSAP pin:true because it injects a
 * pin-spacer <div> into the DOM outside React's virtual DOM, causing
 * "removeChild is not a child" crashes during React Fast Refresh (HMR).
 *
 * Instead, CSS position:sticky handles the viewport lock (zero DOM side effects),
 * and GSAP only drives the horizontal x-translation on scroll.
 */
export default function ScrollDrivenHorizontal({ products = [] }) {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track || products.length === 0) return;

    // Wait for fonts/layout to settle before calculating widths
    const init = () => {
      const scrollDistance = track.scrollWidth - window.innerWidth + 80;

      // Match the container height exactly to the scroll distance so there's no dead space
      section.style.height = `${window.innerHeight + scrollDistance}px`;

      const tween = gsap.to(track, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${scrollDistance}`,
          scrub: 1.2,
          invalidateOnRefresh: true,
          // NO pin:true — CSS sticky handles the lock instead
        },
      });

      return tween;
    };

    const tween = init();

    return () => {
      // Cleanly kill only this component's scrolltrigger — no DOM mutations
      if (tween?.scrollTrigger) {
        tween.scrollTrigger.kill();
      }
      tween?.kill();
    };
  }, [products]);

  if (products.length === 0) return null;

  return (
    /*
     * Outer wrapper: height determines total scroll distance.
     * Dynamic height set by JS to match horizontal translation scroll distance.
     */
    <div
      ref={sectionRef}
      style={{ minHeight: "100vh" }}
      className="relative w-full"
    >
      {/*
       * Inner sticky element: CSS sticky replaces GSAP pin.
       * Stays fixed to top:0 while parent scrolls — zero DOM insertion.
       */}
      <div className="sticky top-0 overflow-hidden w-full bg-gradient-to-b from-white to-slate-50 py-10">
        {/* Section Heading */}
        <div className="w-full max-w-7xl mx-auto px-4 mb-8">
          <div className="text-center">
            <span className="text-blue-600 font-semibold uppercase tracking-[3px] text-xs sm:text-sm">
              Featured Products
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Our Best Selling Products
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mt-4" />
          </div>
        </div>

        {/* Cards track: GSAP only applies x-transform here */}
        <div className="overflow-hidden w-full">
          <div
            ref={trackRef}
            className="flex gap-6 pl-4 sm:pl-20 pr-20 w-max"
          >
            {products.map((item) => (
              <Link
                href={`/products/${item.categorySlug || 'ro-cabinet'}/${item.slug}`}
                key={item.id}
                className="flex-shrink-0 block bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden group h-[400px] w-[280px] sm:w-[300px] flex flex-col cursor-pointer"
              >
                {/* Image */}
                <div className="h-44 flex items-center justify-center bg-gray-50 p-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full object-contain group-hover:scale-105 transition duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-gray-900 text-sm mb-2 leading-6 line-clamp-2">
                    {item.name}
                  </h3>
                  <div className="space-y-0.5 text-xs text-gray-600 mb-4">
                    <p><span className="font-semibold">Storage:</span> {item.storage}</p>
                    <p><span className="font-semibold">Material:</span> {item.material}</p>
                  </div>
                  <div className="mt-auto">
                    <span className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2.5 font-semibold transition flex items-center justify-center gap-2 text-xs">
                      Get Quote <ArrowRight size={15} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <Link
            href="/products"
            className="inline-block px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition text-sm"
          >
            View All Products
          </Link>
        </div>
      </div>
    </div>
  );
}
