"use client";

import React, { useRef, useEffect, useState } from "react";

/**
 * HorizontalScroll with scroll-lock behaviour:
 * - When the section enters the viewport, vertical page scroll is BLOCKED.
 * - Vertical wheel delta is converted to horizontal card scrolling.
 * - Page scroll resumes ONLY after the last card is reached (or if scrolling back to start).
 */
export default function HorizontalScroll({ children, className = "", itemClassName = "" }) {
  const scrollRef = useRef(null);
  const isInView = useRef(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Track whether this section is visible in the viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        isInView.current = entry.isIntersecting;
      },
      { threshold: 0.4 } // section must be 40% visible to activate
    );
    observer.observe(el);

    const handleWheel = (e) => {
      if (!isInView.current) return;

      const atStart = el.scrollLeft === 0;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 2;

      const scrollingDown = e.deltaY > 0;
      const scrollingUp = e.deltaY < 0;

      // If scrolling down and not yet at the end of cards → lock page, scroll cards
      if (scrollingDown && !atEnd) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
        return;
      }

      // If scrolling up and not yet back at the start of cards → lock page, scroll cards back
      if (scrollingUp && !atStart) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
        return;
      }

      // Otherwise: atEnd scrolling down, or atStart scrolling up → let page scroll normally
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      observer.disconnect();
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .self-no-scrollbar::-webkit-scrollbar {
          display: none !important;
        }
        .self-no-scrollbar {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
      `}} />
      <div
        ref={scrollRef}
        className={`flex flex-row flex-nowrap overflow-x-auto overflow-y-hidden gap-4 pb-4 self-no-scrollbar ${className}`}
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {React.Children.map(children, (child) => {
          if (!child) return null;
          return (
            <div className={`flex-shrink-0 ${itemClassName}`}>
              {child}
            </div>
          );
        })}
      </div>
    </>
  );
}
