"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";



export default function Faq2() {

let city="del"


  const [openIndex, setOpenIndex] = useState(null);


  const faqs = [
  {
    question: `Who is a reliable RO Cabinet Manufacturer in ${city}?`,
    answer: `JNJ Aqua is a trusted RO Cabinet Manufacturer in ${city}, offering durable, stylish, and high-quality RO cabinet bodies for domestic and commercial water purification systems.`,
  },
  {
    question: "What types of RO cabinets does JNJ Aqua manufacture?",
    answer:
      "JNJ Aqua manufactures a range of RO cabinets, including RO Pure Cabinet, RO Camry Chrome Cabinet, RO Sumo Cabinet, and RO Nexus Diamond Cabinet.",
  },
  {
    question: `Is JNJ Aqua a Water Purifier Manufacturer in ${city}?`,
    answer: `Yes, JNJ Aqua is a Water Purifier Manufacturer in ${city}, providing quality RO water purifiers and related water purification products for different requirements.`,
  },
  {
    question: "Does JNJ Aqua supply RO spare parts?",
    answer:
      "Yes, JNJ Aqua supplies a wide range of RO spare parts and accessories, including RO pumps, SMPS, membrane housings, filter housings, fittings, and other RO components.",
  },
  {
    question: "Can I order RO cabinets in bulk from JNJ Aqua?",
    answer:
      "Yes, JNJ Aqua offers bulk RO cabinet manufacturing and supply for RO manufacturers, dealers, distributors, and water purification businesses.",
  },
  {
    question: "What products does JNJ Aqua offer for water purification systems?",
    answer:
      "JNJ Aqua offers RO cabinets, water purifiers, RO spare parts, and accessories, providing a comprehensive range of products for water purification requirements.",
  },
];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white px-8 py-6 sm:px-6 md:py-16">
      <div className="mx-auto flex max-w-5xl flex-col items-center">
        {/* Heading */}
        <p className="text-sm md:text-base font-medium uppercase tracking-[0.2em] text-[#0d3b8e]">
          FAQ&apos;s
        </p>

        <h2 className="mt-2 text-center text-3xl font-semibold text-[#1d2939] md:text-6xl">
          Frequently Asked Questions
        </h2>

        <p className="mt-3 max-w-2xl text-center text-sm leading-6 text-gray-500 md:text-lg">
          Find answers to common questions about JNJ Aqua, our RO cabinets,
          spare parts
        </p>

        {/* FAQ List */}
        <div className="mt-8 w-full">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="w-full border-b border-slate-200">
                {/* Question */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="
                    flex
                    w-full
                    cursor-pointer
                    items-center
                    justify-between
                    gap-5
                    py-5
                    text-left
                  "
                >
                  <h3 className="text-sm font-medium leading-6 text-[#1d2939] sm:text-lg">
                    {faq.question}
                  </h3>

                  <FaChevronDown
                    className={`
                      flex-shrink-0
                      text-sm
                      text-[#0d3b8e]
                      transition-transform
                      duration-500
                      ease-in-out
                      ${isOpen ? "rotate-180" : "rotate-0"}
                    `}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`
                    grid
                    transition-all
                    duration-500
                    ease-in-out
                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pb-5 pr-8 text-sm leading-6 text-slate-500">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
