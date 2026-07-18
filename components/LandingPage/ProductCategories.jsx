"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { Check, Package, Droplets, Settings, Briefcase } from "lucide-react";

const categories = [
  {
    title: "RO CABINETS",
    image: "/1.png",
    icon: Package,
    color: "bg-lime-600",
    points: [
      "ABS RO Cabinets",
      "Transparent Cabinets",
      "Designer RO Cabinets",
      "LED Display Cabinets",
    ],
  },
  // {
  //   title: "WATER PURIFIERS",
  //   image: "/2.png",
  //   icon: Droplets,
  //   color: "bg-amber-500",
  //   points: [
  //     "RO + UV",
  //     "RO + UV + UF",
  //     "Alkaline Water Purifiers",
  //     "Copper RO Purifiers",
  //   ],
  // },
  {
    title: "RO COMPONENTS",
    image: "/3.png",
    icon: Settings,
    color: "bg-cyan-600",
    points: [
      "Pumps",
      "Membranes",
      "Filters",
      "SMPS & Controllers",
    ],
  },
  {
    title: "OEM SOLUTIONS",
    image: "/4.png",
    icon: Briefcase,
    color: "bg-purple-600",
    points: [
      "Private Label ",
      "Custom Branding",
      "Custom Cabinet Design",
      "Bulk Production",
    ],
  },
];

export default function ProductCategories() {
  return (
    <section className="w-full bg-[#fafafa] py-14 overflow-hidden">
  <div className="max-w-7xl mx-auto px-0">
    <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-10 items-start">

      {/* LEFT CONTENT */}
      <div className=" ">
      <div className="sticky top-24">
        <p className="text-[#0D3B8E] font-bold uppercase text-[15px] tracking-wider relative inline-block">
          OUR PRODUCTS
          <span className="absolute left-0 -bottom-2 w-14 h-[3px] bg-[#0D3B8E]" />
        </p>

        <h2 className="mt-6 text-4xl font-extrabold leading-tight text-gray-900">
          Premium <br />
          <span className="text-[#0D3B8E]">
            RO Cabinets &
            <br />
            Spare Parts
          </span>
        </h2>

        <p className="mt-5 text-gray-600 txt-lg leading-7">
          Explore our complete range of RO Cabinets, Spare Parts,
          Components and OEM Manufacturing Solutions designed for quality,
          performance and reliability.
        </p>

        <button className="mt-8 flex items-center gap-2 font-semibold text-[#0D3B8E] hover:gap-3 transition-all">
          View All Products →
        </button>
      </div>
      </div>

      {/* RIGHT SWIPER */}
      <div className="overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          loop
          speed={900}
          spaceBetween={25}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1.2,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2.4,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
        >
          {categories.map((item, index) => {
            const Icon = item.icon;

            return (
              <SwiperSlide key={index}>
                <div className="relative bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-4 group">

                  {/* Icon */}
                  {/* <div
                    className={`absolute -top-7 left-7 w-14 h-14 rounded-full ${item.color} flex items-center justify-center shadow-lg ring-4 ring-white`}
                  >
                    <Icon className="text-white" size={24} />
                  </div> */}

                  {/* Image */}
                  <div className="mt-0 flex justify-center overflow-hidden rounded-2xl bg-gray-50">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={220}
                      height={180}
                      className="h-[210px] w-full object-contain transition duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 text-xl font-extrabold text-gray-900">
                    {item.title}
                  </h3>

                  {/* Features */}
                  <ul className="mt-4 space-y-2">
                    {item.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start text-sm text-gray-600"
                      >
                        <Check
                          size={16}
                          className="mr-2 mt-1 shrink-0 text-[#0D3B8E]"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* Button */}
                  <button className="mt-6 w-full h-12 rounded-xl bg-[#0D3B8E] text-white font-semibold transition hover:bg-[#082d6e]">
                    VIEW PRODUCTS
                  </button>

                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

    </div>
  </div>


    <section className="relative z-10 mt-13 px-4 lg:px-8">
  <div className="mx-auto w-full rounded-[28px] border border-blue-100 bg-white p-4 shadow-[0_25px_80px_rgba(0,0,0,0.12)] backdrop-blur-xl lg:p-6">
    <h2 className="mb-7 text-center text-2xl font-bold text-[#0F4FA8] md:text-4xl">
      Get the Best RO Cabinets & Spare Parts at Wholesale Prices!
    </h2>

    <p className="mx-auto mb-6 max-w-4xl text-center text-gray-600">
      From RO Cabinets, Pumps, Membranes, Filters, SMPS, Faucets, and all
      essential RO spare parts—we provide premium-quality products for
      manufacturers, dealers, distributors, and retailers. 
    </p>

    <form>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-[1fr_1fr_1fr_1fr_auto]">
        {/* Name */}
        <input
          type="text"
          placeholder="Full Name"
          className="h-[60px] w-full rounded-2xl border border-blue-300 bg-slate-50 px-5 text-[15px] outline-none transition focus:border-blue-600 focus:bg-white"
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email Address"
          className="h-[60px] w-full rounded-2xl border border-blue-300 bg-slate-50 px-5 text-[15px] outline-none transition focus:border-blue-600 focus:bg-white"
        />

        {/* Phone */}
        <input
          type="tel"
          placeholder="Phone Number"
          className="h-[60px] w-full rounded-2xl border border-blue-300 bg-slate-50 px-5 text-[15px] outline-none transition focus:border-blue-600 focus:bg-white"
        />

        {/* Requirement */}
        <input
          type="text"
          placeholder="Products Required (RO Cabinet, Pump, Membrane...)"
          className="h-[60px] w-full rounded-2xl border border-blue-300 bg-slate-50 px-5 text-[15px] outline-none transition focus:border-blue-600 focus:bg-white"
        />

        {/* Desktop Button */}
        <button
          type="submit"
          className="hidden h-[60px] min-w-[220px] rounded-2xl bg-gradient-to-r from-[#0F4FA8] to-[#0A73E8] px-8 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(14,116,233,0.35)] xl:block"
        >
          Get a Quote →
        </button>
      </div>

      {/* Mobile Button */}
      <div className="mt-4 flex justify-center xl:hidden">
        <button
          type="submit"
          className="h-[60px] min-w-[220px] rounded-2xl bg-gradient-to-r from-[#0F4FA8] to-[#0A73E8] px-8 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(14,116,233,0.35)]"
        >
          Get a Quote →
        </button>
      </div>
    </form>
  </div>
</section>
</section>
  );
}