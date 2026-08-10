"use client";

import React, { useEffect, useRef, memo } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const ProductCard = memo(({ item, mobileSnap }) => {
  return (
    <Link
      href={`/products/${item.categorySlug || "ro-cabinet"}/${item.slug}`}
      style={{ contain: "content" }}
      className={`flex-shrink-0 block bg-white rounded-xl border border-gray-200 overflow-hidden flex flex-col cursor-pointer
        ${mobileSnap ? "snap-center w-[calc(100vw-32px)] h-[380px]" : "w-[260px] sm:w-[300px] h-[380px] sm:h-[400px]"}
      `}
    >
      {/* Image Container */}
      <div className="h-44 flex items-center justify-center bg-gray-50 p-4">
        <Image
              height={100}
                  width={100}
          src={item.image}
          alt={item.name}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-contain"
        />
      </div>

      {/* Content */}
      <div className="p-3 flex flex-col flex-1">
        <h3 className="font-bold text-gray-900 text-[13px] mb-2 leading-6 line-clamp-2">
          {item.name}
        </h3>
        <div className="space-y-0.5 text-xs text-gray-600 mb-2.5">
          {item.specs?.map((spec, i) => (
            <p key={i}>
              <span className="font-semibold">{spec.key}:</span> {spec.value}
            </p>
          ))}
        </div>
        <div className="mt-auto">
          <span className="w-full bg-blue-600 text-white rounded-lg py-2.5 font-semibold flex items-center justify-center gap-2 text-base">
            Get Quote <ArrowRight size={15} />
          </span>
        </div>
      </div>
    </Link>
  );
});

ProductCard.displayName = "ProductCard";

export default function ScrollDrivenHorizontal({ products = [] }) {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const mobileContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const activeIndexRef = useRef(0);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    // GSAP scroll effect only on desktop (≥ 768px)
    // Mobile uses native CSS scroll-snap with JS autoplay — zero conflict
    if (window.innerWidth < 768) return;

    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track || products.length === 0) return;

    const init = () => {
      const scrollDistance = track.scrollWidth - window.innerWidth + 80;
      section.style.height = `${window.innerHeight + scrollDistance}px`;

      const tween = gsap.to(track, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${scrollDistance}`,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      return tween;
    };

    const tween = init();

    return () => {
      if (tween?.scrollTrigger) tween.scrollTrigger.kill();
      tween?.kill();
      // Reset height so it doesn't leave dead space when resizing
      if (sectionRef.current) sectionRef.current.style.height = "";
    };
  }, [products]);

  // Mobile Auto Swipe Effect
  useEffect(() => {
    if (products.length === 0 || window.innerWidth >= 768) return;

    const interval = setInterval(() => {
      const container = mobileContainerRef.current;
      if (!container) return;

      const totalItems = products.length;
      const nextIndex = (activeIndexRef.current + 1) % totalItems;

      const itemWidth = container.scrollWidth / totalItems;
      container.scrollTo({
        left: nextIndex * itemWidth,
        behavior: "smooth",
      });
      setActiveIndex(nextIndex);
    }, 5000); // Auto swipe every 5 seconds

    return () => clearInterval(interval);
  }, [products]);

  const handleMobileScroll = () => {
    const container = mobileContainerRef.current;
    if (!container) return;

    const totalItems = products.length;
    const scrollLeft = container.scrollLeft;
    const itemWidth = container.scrollWidth / totalItems;
    const index = Math.round(scrollLeft / itemWidth);

    if (index !== activeIndexRef.current && index >= 0 && index < totalItems) {
      setActiveIndex(index);
    }
  };

  if (products.length === 0) return null;

  return (
    <>
      {/* ============================================
          MOBILE: Native CSS horizontal scroll-snap with Auto-Swipe
          ============================================ */}
      <section className="block md:hidden bg-slate-50 py-10">
        {/* Heading */}
        <div className="text-center px-4 mb-8">
          <span className="text-blue-600 font-semibold uppercase tracking-[3px] text-xs">
            Featured Products
          </span>
          <h2 className="mt-2 text-2xl font-bold text-gray-900">
            Our Best Selling Products
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mt-4" />
        </div>

        {/* Swipe container */}
        <div
          ref={mobileContainerRef}
          onScroll={handleMobileScroll}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-4 pb-4 scroll-smooth"
          style={{
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none" /* Firefox */,
            msOverflowStyle: "none" /* IE/Edge */,
          }}
        >
          {products.map((item) => (
            <ProductCard key={item.id} item={item} mobileSnap={true} />
          ))}
        </div>

        {/* Dynamic scroll indicator dots */}
        <div className="flex justify-center gap-1.5 mt-4">
          {products.map((_, i) => (
            <div
              key={i}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex ? "bg-blue-600 w-3.5" : "bg-slate-300"
              }`}
            />
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-6 px-4">
          <Link
            href="/products"
            className="inline-block px-8 py-3 bg-white border-2 border-blue-600 text-blue-600 rounded-full font-semibold text-sm"
          >
            View All Products
          </Link>
        </div>
      </section>

      {/* ============================================
          DESKTOP: GSAP scroll-driven horizontal pan
          ============================================ */}
      <div
        ref={sectionRef}
        style={{ minHeight: "100vh" }}
        className="hidden md:block relative w-full"
      >
        <div className="sticky top-[72px] lg:top-[86px] overflow-hidden w-full bg-slate-50 py-10">
          {/* Heading */}
          <div className="w-full max-w-7xl mx-auto px-4 mb-8">
            <div className="text-center">
              <span className="text-blue-600 font-semibold uppercase tracking-[3px] text-sm">
                Featured Products
              </span>
              <h2 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900">
                Our Best Selling Products
              </h2>
              <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mt-4" />
            </div>
          </div>

          {/* GSAP Track */}
          <div className="overflow-hidden w-full">
            <div ref={trackRef} className="flex gap-6 pl-20 pr-20 w-max">
              {products.map((item) => (
                <ProductCard key={item.id} item={item} mobileSnap={false} />
              ))}
            </div>
          </div>

          {/* View All */}
          <div className="text-center mt-8">
            <Link
              href="/products"
              className="inline-block px-8 py-3 bg-white border-2 border-blue-600 text-blue-600 rounded-full font-semibold text-sm"
            >
              View All Products
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
