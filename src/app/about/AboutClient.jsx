import Link from "next/link";
import React from "react";

export default function AboutClient() {
  return <>
   <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.12),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_45%)]" />

        <div className="relative max-w-7xl mx-auto px-6 py-14">
          {/* <span className="inline-block rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
            CONTACT US
          </span> */}

          <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-tight text-slate-900">
           About
          {" "}
          <br  className=" md:hidden"/>
          <span className="text-4xl">
           - JNJ AQUA
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-600">
            At JNJ Aqua we care about quality. Our factory is modern. Our workers are experienced. We check everything we make to make sure it is good.
          </p>
        </div>
      </section>

       <div className="px-4 py-12 md:py-20">
  {/* HERO / ABOUT */}
  <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">

    {/* LEFT CONTENT */}
    <div className="text-center md:text-left order-1 md:order-2">
      <h1 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-4">
        Trusted Manufacturer of RO Cabinets & Water Purifier Spare Parts
      </h1>

      <div className="space-y-4">
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          JNJ Aqua is a trusted manufacturer of high-quality RO Cabinets and
          Water Purifier Spare Parts in India. With years of experience in
          plastic manufacturing and water purification components, we are
          committed to delivering durable, efficient, and visually appealing
          products.
        </p>

        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          Our product range includes RO Cabinets, Cabinet Bodies, Plastic
          Components, Fittings, and other essential water purifier parts.
          Using advanced machinery and premium materials, we ensure every
          product is strong, reliable, and built for long-term performance.
        </p>

        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          At JNJ Aqua, quality is our priority. Our modern facility and
          experienced team maintain strict quality checks at every stage of
          production. We continuously innovate and upgrade our processes to
          meet evolving market needs.
        </p>

        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          Beyond manufacturing, we believe in building strong relationships
          with our customers — honesty, timely delivery, competitive pricing,
          and dependable support.
        </p>
      </div>

      <Link
        href="/contact"
        className="inline-block bg-gray-900 hover:bg-gray-800 text-white mt-6 px-7 py-3 rounded-full text-sm font-medium shadow-sm transition"
      >
        Contact Us
      </Link>
    </div>

    {/* RIGHT IMAGE */}
    <div className="order-1 md:order-2 w-full">
      <img
        src="/1.png"
        alt="JNJ Aqua manufacturing facility"
        className="w-full h-100 md:h-full max-h-[630px] rounded-3xl object-cover shadow-sm"
      />
    </div>
  </div>
  

  {/* MISSION & VISION */}
  <div className="max-w-6xl mx-auto mt-16 md:mt-24">

    <div className="text-center mb-10 md:mb-14">
      <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">
        Our Mission & Vision
      </h2>
      <p className="text-gray-600 mt-3 text-sm md:text-base max-w-2xl mx-auto">
        Driving innovation, quality, and trust in water purification solutions.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

      {/* Mission */}
      <div className="bg-gradient-to-b from-[#E0F7FA] to-[#E8F5E9] p-6 sm:p-8 md:p-10 rounded-3xl shadow-sm hover:shadow-lg transition-shadow duration-300">
        <span className="inline-block text-xs font-semibold tracking-wide uppercase text-teal-700 bg-white/60 px-3 py-1 rounded-full mb-4">
          Mission
        </span>
        <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
          Building the parts that keep clean water flowing
        </h3>

        <div className="space-y-3">
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Our mission is to manufacture high-quality RO Cabinets and Water
            Purifier Spare Parts that support businesses in delivering safe
            and efficient water purification systems.
          </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            We are committed to providing durable, reliable, and
            cost-effective products while ensuring timely delivery and
            excellent customer service.
          </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Through continuous improvement and advanced machinery, we aim to
            enhance product quality and meet the evolving needs of the
            industry.
          </p>
        </div>
      </div>

      {/* Vision */}
      <div className="bg-gradient-to-b from-[#FFF3E0] to-[#FCE4EC] p-6 sm:p-8 md:p-10 rounded-3xl shadow-sm hover:shadow-lg transition-shadow duration-300">
        <span className="inline-block text-xs font-semibold tracking-wide uppercase text-rose-700 bg-white/60 px-3 py-1 rounded-full mb-4">
          Vision
        </span>
        <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
          Setting the standard for water purifier components
        </h3>

        <div className="space-y-3">
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Our vision is to become one of India's leading manufacturers of RO
            Cabinets and Water Purifier Spare Parts, recognized for
            innovation, quality, and trust.
          </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            We aim to set industry standards by developing advanced products
            and expanding our capabilities through modern technology and
            sustainable practices.
          </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            We strive to build a trusted brand that contributes to safe water
            access by delivering reliable, environmentally responsible
            solutions.
          </p>
        </div>
      </div>

    </div>
  </div>
</div>
  </>;
}
