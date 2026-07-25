"use client";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import { Check, Package, Droplets, Settings, Briefcase } from "lucide-react";

const getCategoryMeta = (title = "") => {
  const t = title.toUpperCase();
  if (t.includes("CABINET")) {
    return { icon: Package, color: "bg-lime-600" };
  }
  if (t.includes("COMPONENT") || t.includes("PART")) {
    return { icon: Settings, color: "bg-cyan-600" };
  }
  if (t.includes("OEM") || t.includes("SOLUTION")) {
    return { icon: Briefcase, color: "bg-purple-600" };
  }
  return { icon: Droplets, color: "bg-blue-600" };
};

export default function ProductCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const prodRes = await fetch("/api/product").then((res) => res.json());

        if (prodRes.success) {
          // Find products matching the names: Atlas, Alive, Aroma specifically
          const targetNames = ["ALTIS", "ALIVE", "AROMA"];
          const matchedProducts = [];

          targetNames.forEach((targetName) => {
            const found = prodRes.products.find(
              (p) => p.name && p.name.toUpperCase().includes(targetName)
            );
            if (found) {
              matchedProducts.push(found);
            }
          });

          // Fallback to other cabinet products if we don't have 3 matched
          if (matchedProducts.length < 3) {
            const cabinetProducts = prodRes.products.filter(
              (prod) => 
                prod.category && 
                prod.category.name && 
                prod.category.name.toUpperCase().includes("CABINET") &&
                !matchedProducts.some((m) => m._id === prod._id)
            );
            matchedProducts.push(...cabinetProducts.slice(0, 3 - matchedProducts.length));
          }

          // Map them to the UI structure
          const mapped = matchedProducts.map((prod) => {
            const firstVariant = prod.colorVariants?.[0];
            const imageUrl = firstVariant?.images?.[0]?.url || "/1.png";
            
            // Map specifications or descriptions to bullets
            const points = prod.specifications && prod.specifications.length > 0 
              ? prod.specifications.map((spec) => `${spec.key}: ${spec.value}`).slice(0, 4)
              : [
                  "Food-Grade ABS Plastic",
                  "Elegant & Modern Design",
                  "High Storage Capacity",
                  "Universal Component Fit",
                ];

            return {
              id: prod._id,
              title: prod.name,
              image: imageUrl,
              slug: prod.slug,
              categorySlug: prod.category?.slug || "ro-cabinet",
              points,
            };
          });

          setCategories(mapped);
        }
      } catch (error) {
        console.error("Error fetching cabinet products:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  return (
    <section className="w-full bg-[#fafafa] py-14 overflow-hidden">
  <div className="max-w-7xl mx-auto px-0">
    <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-10 items-start">

      {/* LEFT CONTENT */}
      <div className="px-4 sm:px-6 lg:px-0">
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

        <Link href="/products">
          <button className="mt-8 flex items-center gap-2 font-semibold text-[#0D3B8E] hover:gap-3 transition-all">
            View All Products →
          </button>
        </Link>
      </div>
      </div>

      {/* RIGHT SWIPER */}
      <div className="overflow-hidden">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((n) => (
              <div key={n} className="bg-white rounded-3xl border border-gray-200 p-4 animate-pulse">
                <div className="h-[210px] w-full bg-slate-100 rounded-2xl" />
                <div className="h-6 bg-slate-100 rounded mt-5 w-2/3" />
                <div className="space-y-2 mt-4">
                  <div className="h-4 bg-slate-100 rounded w-5/6" />
                  <div className="h-4 bg-slate-100 rounded w-4/5" />
                  <div className="h-4 bg-slate-100 rounded w-3/4" />
                </div>
                <div className="h-12 bg-slate-100 rounded-xl mt-6 w-full" />
              </div>
            ))}
          </div>
        ) : (
          <Swiper
            modules={[Autoplay]}
            loop={categories.length > 3}
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
              const meta = getCategoryMeta(item.title);
              const Icon = meta.icon;

              return (
                <SwiperSlide key={index} className="!h-auto flex">
                  <Link href={`/products/${item.categorySlug}/${item.slug}`} className="w-full flex">
                    <div className="relative bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-4 group h-full flex flex-col justify-between w-full">
                      <div>
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
                      </div>

                      {/* Button */}
                      <div className="block mt-6">
                        <button className="w-full h-12 rounded-xl bg-[#0D3B8E] text-white font-semibold transition hover:bg-[#082d6e]">
                          VIEW DETAILS
                        </button>
                      </div>

                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
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
          className="h-15 w-full rounded-2xl border border-blue-300 bg-slate-50 px-5 text-[15px] outline-none transition focus:border-blue-600 focus:bg-white"
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email Address"
          className="h-15 w-full rounded-2xl border border-blue-300 bg-slate-50 px-5 text-[15px] outline-none transition focus:border-blue-600 focus:bg-white"
        />

        {/* Phone */}
        <input
          type="tel"
          placeholder="Phone Number"
          className="h-15 w-full rounded-2xl border border-blue-300 bg-slate-50 px-5 text-[15px] outline-none transition focus:border-blue-600 focus:bg-white"
        />

        {/* Requirement */}
        <input
          type="text"
          placeholder="Products Required (RO Cabinet, Pump, Membrane...)"
          className="h-15 w-full rounded-2xl border border-blue-300 bg-slate-50 px-5 text-[15px] outline-none transition focus:border-blue-600 focus:bg-white"
        />

        {/* Desktop Button */}
        <button
          type="submit"
          className="hidden h-15 min-w-[220px] rounded-2xl bg-gradient-to-r from-[#0F4FA8] to-[#0A73E8] px-8 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(14,116,233,0.35)] xl:block"
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