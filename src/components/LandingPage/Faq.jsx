"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What products does JNJ Aqua manufacture?",
    answer:
      "JNJ Aqua manufactures RO cabinets, water purifiers, RO spare parts, and water purifier accessories with a focus on quality, durability, and reliable performance.",
  },
  {
    question: "Is JNJ Aqua an RO Cabinet Manufacturer?",
    answer:
      "Yes, JNJ Aqua is an RO Cabinet Manufacturer offering a range of durable and stylish RO cabinet bodies for domestic and commercial water purifiers.",
  },
  {
    question: "Does JNJ Aqua manufacture water purifiers?",
    answer:
      "Yes, JNJ Aqua is a Water Purifier Manufacturer offering reliable RO water purification solutions and related components.",
  },
  {
    question: "What types of RO spare parts are available from JNJ Aqua?",
    answer:
      "JNJ Aqua offers various RO spare parts and accessories, including RO pumps, SMPS, membrane housings, filter housings, fittings, and other essential RO components.",
  },
  {
    question: "Can I get RO cabinets and spare parts from the same manufacturer?",
    answer:
      "Yes, JNJ Aqua provides RO cabinets, water purifier products, spare parts, and accessories under one roof, making it convenient for businesses to source complete RO requirements.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white px-4 py-6 sm:px-6 md:py-16">
      <div className="mx-auto flex max-w-3xl flex-col items-center">

        {/* Heading */}
        <p className="text-sm md:text-base font-medium uppercase tracking-[0.2em] text-[#0d3b8e]">
          FAQ&apos;s
        </p>

        <h2 className="mt-2 text-center text-3xl font-semibold text-[#1d2939] sm:text-5xl">
          Frequently Asked Questions
        </h2>

        <p className="mt-3 max-w-2xl text-center text-sm leading-6 text-gray-500 sm:text-base">
          Find answers to common questions about JNJ Aqua, our RO cabinets, spare parts
        </p>

        {/* FAQ List */}
        <div className="mt-8 w-full">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="w-full border-b border-slate-200"
              >
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