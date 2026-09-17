"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import {
  FaArrowRight,
  FaCheckCircle,
  FaIndustry,
  FaPalette,
  FaPhoneAlt,
  FaShieldAlt,
  FaTags,
  FaTint,
  FaUsers,
  FaWhatsapp,
} from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { useState } from "react";
import Faq2 from "@/components/City/Faq2";
import CTA from "@/components/LandingPage/CTA";

const products = [
  {
    name: "Alive RO Water Cabinet",
    image: "/citypage/alive-ro.webp",
  },
  {
    name: "AQS RO CABINETS",
    image: "/citypage/aqs-ro.webp",
  },
  {
    name: "Dolphin Water RO Cabinet",
    image: "/citypage/dolphin-ro.webp",
  },
  {
    name: "GENIUS UV WATER PURIFIER CABINET",
    image: "/citypage/genius-uv.webp",
  },
  {
    name: "Nexlin Urban RO Cabinet",
    image: "/citypage/nexlin-urban.webp",
  },
  {
    name: "Pure X RO Water Purifier Cabinet",
    image: "/citypage/pure-x.webp",
  },
  {
    name: "Merlin UTC Water Purifier",
    image: "/citypage/merlin-utc.webp",
  },
];

const products2 = [
  {
    title: "AROMA RO CABINET",
    image: "/citypage/aroma.webp",
    href: "/products/ro-cabinet/aroma",
    star: 4,
  },
  {
    title: "PRIDE WATER PURIFIER BODY",
    image: "/citypage/pride.webp",
    href: "/products/ro-cabinet/pride",
  },
  {
    title: "Merlin I Speed Water Purifier",
    image: "/citypage/merlin.webp",
    href: "/products/reverse-osmosis-water-purifier/merlin-i-speed-water-purifier",
  },
  {
    title: "Merlin Rapid digital Ro system",
    image: "/citypage/rapid2.webp",
    href: "/products/reverse-osmosis-water-purifier/merlin-rapid-digital-ro-system",
  },
  {
    title: "ELEVEN RO BODY CABINET",
    image: "/citypage/eleven.webp",
    href: "/products/ro-cabinet/eleven",
  },
  {
    title: "QUBE RO CABINET",
    image: "/citypage/qube.webp",
    href: "/products/ro-cabinet/qube-5077",
  },
];

const featuresLeft = [
  {
    title: "Food Grade A.B.S Body",
    description: "We use food-grade material to manufacture durable solutions.",
    icon: "pH",
  },
  {
    title: "Good Storage Capacity",
    description:
      "These purifiers are available in different water storage capacities.",
    icon: "Ca²⁺",
  },
  {
    title: "Eliminate Contaminants",
    description:
      "Kill the contaminants and other bad toxins present in the water.",
    icon: "Cl⁻",
  },
];

const featuresRight = [
  {
    title: "Fully Automatic",
    description:
      "The solution is automatic and works efficiently to provide purified water.",
    icon: "Mg²⁺",
  },
  {
    title: "Balance Nutrients",
    description:
      "This filtration balances the right pH level of the water and enhances its taste too.",
    icon: "HCO₃",
  },
  {
    title: "Ensures Saving",
    description:
      "Neither purchase nor maintenance of smart ROs will cost you the fortune.",
    icon: "Na⁺",
  },
];

const Feature = ({ feature }) => {
  return (
    <div className="relative flex items-start gap-4">
      {/* Mobile Icon */}
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-blue-600 shadow-md lg:hidden">
        {feature.icon}
      </div>

      <div>
        <h3 className="text-lg font-semibold leading-tight text-blue-600 sm:text-xl">
          {feature.title}
        </h3>

        <p className="mt-2 max-w-sm text-sm leading-6 text-gray-800">
          {feature.description}
        </p>
      </div>
    </div>
  );
};

const FloatingIcon = ({ children, className }) => {
  return (
    <div
      className={`absolute z-10 hidden h-14 w-14 items-center justify-center rounded-full bg-white text-sm font-semibold text-blue-600 shadow-[0_8px_30px_rgba(14,165,233,0.15)] lg:flex ${className}`}
    >
      {children}
    </div>
  );
};

export default function Location({ city }) {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [product, setProduct] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const features3 = [
    {
      icon: FaCheckCircle,
      title: "Quality Products",
      description: `We manufacture high-quality RO cabinets, water purifiers, and RO spare parts in ${city}, using reliable materials and maintaining excellent finishing standards.`,
    },
    {
      icon: FaTags,
      title: "Competitive Pricing",
      description: `As an experienced RO Cabinet Manufacturer in ${city}, we offer competitive prices for both standard and bulk requirements.`,
    },
    {
      icon: FaShieldAlt,
      title: "Durable & Reliable",
      description:
        "Our RO cabinets and water purifiers are designed for reliable performance, durability, and long-term use.",
    },
    {
      icon: FaPalette,
      title: "Modern Designs",
      description: `We offer stylish and practical RO cabinet designs in ${city} that complement modern domestic water purification systems.`,
    },
    {
      icon: FaUsers,
      title: "Experienced Team",
      description: `Our experienced team follows consistent manufacturing processes to deliver reliable RO water purifier products in ${city}.`,
    },
    {
      icon: FaIndustry,
      title: "Bulk Manufacturing",
      description: `JNJ Aqua provides bulk manufacturing and supply of RO cabinets, water purifiers, spare parts, and accessories in ${city} for dealers, distributors, and businesses.`,
    },
  ];

  const submitForm = async () => {
    try {
      setLoading(true);

      const formData = {
        platform: "Aqua JNJ City Page",
        platformEmail: "jnjaquadelhi@gmail.com",
        supplierToken: "6a9fefe9d936bdc2bb1dabfc",

        name,
        phone,
        email,
        place: "NA",
        product,
        message: `Company Name: ${"N/A"} ,"Message :"
      
      ${"NA"}`,
      };

      const { data } = await axios.post(
        "https://brandbnalo.com/api/form/add",
        formData,
      );

      if (data?.success) {
        setSubmitted(true);

        setSuccessMessage("✅ Your enquiry has been submitted successfully!");

        toast.success("Form Submitted Successfully");

        const whatsappText = `Hi, I am ${name}.
      Email: ${email}
      Product: ${product}
      
     
      
      Contact: ${phone}`;

        const waUrl = `https://wa.me/+919540010221?text=${encodeURIComponent(
          whatsappText,
        )}`;

        setTimeout(() => {
          window.open(waUrl, "_blank");
        }, 1000);

        // RESET
        setName("");
        setPhone("");
        setEmail("");
        setProduct("");
        // setMessage("");
        // setPlace("");
        // setCompany("");
        // setOtp("");

        // setShowOtpBox(false);
        // setIsPhoneVerified(false);

        setTimeout(() => {
          setSubmitted(false);
        }, 4000);
      } else {
        setSuccessMessage("❌ Failed to send. Please try again.");
      }
    } catch (error) {
      console.log(error);

      setSuccessMessage("❌ Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  // HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!phone || phone.length !== 10) {
      return toast.error("Enter Valid Phone Number");
    }

    await submitForm();
  };

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.12),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_45%)]" />

        <div className="relative max-w-7xl mx-auto px-6 py-18 md:py-25">
          <h1 className="mt-6 text-2xl text-center md:text-6xl font-bold leading-tight text-slate-900">
            Water Purifier Manufacturer in{" "}
            <span className="text-blue-700">{city}</span>
          </h1>
        </div>
      </section>

      {/* explore products */}

      <section className="w-full bg-[#e5eefd] px-5 py-7  md:px-12 md:py-12">
        <div className="mx-auto max-w-[1440px]">
          {/* Heading */}
          <div className="mb-10 text-center md:mb-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              Our Products
            </p>

            <h2 className="text-2xl font-bold tracking-tight text-black  md:text-5xl">
              Explore JNJ Aqua Products
            </h2>

            <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-blue-600" />
          </div>

          {/* Slider */}
          <div className="relative">
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{
                nextEl: ".products-next",
                prevEl: ".products-prev",
              }}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={products.length > 4}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                480: {
                  slidesPerView: 1.2,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 24,
                },
              }}
              className="!pb-4"
            >
              {products.map((product, index) => (
                <SwiperSlide key={`${product.name}-${index}`}>
                  <article className="group  md:h-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    {/* Product Image */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="
                        (max-width: 480px) 90vw,
                        (max-width: 640px) 50vw,
                        (max-width: 1024px) 33vw,
                        25vw
                      "
                        className="object-contain p-5 transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    </div>

                    {/* Product Content */}
                    <div className="flex  flex-col p-3 md:p-5">
                      <h3 className="line-clamp-2 text-lg font-semibold leading-snug text-gray-900">
                        {product.name}
                      </h3>

                      <div className="mt-auto flex gap-3 pt-3  md:pt-5">
                        {/* Call Button */}
                        <Link
                          href="tel:+919540010221"
                          aria-label={`Call about ${product.name}`}
                          className="group flex flex-1 items-center justify-center gap-2 rounded-xl border border-blue-600 bg-blue-600 px-4 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg"
                        >
                          <FaPhoneAlt className="text-base transition-transform duration-300 group-hover:scale-110" />
                          <span>Call</span>
                        </Link>

                        {/* WhatsApp Button */}
                        <Link
                          href="https://wa.me/919540010221"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`WhatsApp about ${product.name}`}
                          className="group flex flex-1 items-center justify-center gap-2 rounded-xl border border-[#25D366] bg-[#25D366] px-4 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-[#1ebe5d] hover:shadow-lg"
                        >
                          <FaWhatsapp className="text-2xl transition-transform duration-300 group-hover:scale-110" />
                          <span>WhatsApp</span>
                        </Link>
                      </div>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Buttons */}
            <button
              type="button"
              aria-label="Previous products"
              className="products-prev absolute left-0 top-1/2 z-10 hidden h-11 w-11 -translate-x-5 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-black shadow-md transition-all hover:bg-[#85a30f] hover:text-white lg:flex"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <button
              type="button"
              aria-label="Next products"
              className="products-next absolute right-0 top-1/2 z-10 hidden h-11 w-11 translate-x-5 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-black shadow-md transition-all hover:bg-blue-600 hover:text-white lg:flex"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          {/* Bottom CTA */}
          <div className="md:mt-5 text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-blue-600 px-7 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-blue-600 hover:text-white"
            >
              View All Products
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14" />
                <path d="M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* about */}

      <section className="relative overflow-hidden bg-white px-5 py-6 md:py-14">
        {/* Subtle Background Pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, #000 0, #000 1px, transparent 1px, transparent 7px)",
          }}
        />

        <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ================= LEFT IMAGE AREA ================= */}
          <div className="relative mx-auto h-[440px] w-full max-w-[560px] sm:h-[500px]">
            {/* Large Main Image */}
            <div className="absolute left-0 top-5 h-[330px] w-[78%] overflow-hidden rounded-2xl border border-gray-100 bg-gray-100 shadow-lg sm:h-[380px]">
              <Image
                src="/citypage/aroma.webp"
                alt="RO Cabinet Manufacturer"
                fill
                priority
                sizes="(max-width: 1024px) 80vw, 40vw"
                className="object-cover"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-blue-600/5" />
            </div>

            {/* Floating Product Image */}
            <div className="absolute bottom-0 right-0 z-10 flex h-[235px] w-[58%] items-center justify-center overflow-hidden rounded-2xl border-2 border-blue-600 bg-[#e8edf6] p-5 shadow-2xl sm:h-[270px]">
              <Image
                src="/citypage/nexlin-urban.webp"
                alt="Water Purifier Manufacturer"
                fill
                sizes="(max-width: 1024px) 60vw, 25vw"
                className="object-contain p-4 transition-transform duration-500 hover:scale-105"
              />

              {/* Small Badge */}
              <div className="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg">
                <FaTint />
              </div>
            </div>

            {/* Decorative Blue Circle */}
            <div className="absolute -bottom-5 left-4 -z-10 h-24 w-24 rounded-full bg-blue-600/10" />

            {/* Decorative Ring */}
            <div className="absolute -right-5 top-0 -z-10 h-28 w-28 rounded-full border-[14px] border-blue-600/10" />
          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div className="relative">
            {/* Background Text */}
            <span className="pointer-events-none absolute -top-10 left-0 select-none text-5xl font-black uppercase tracking-tight text-blue-600/[0.05] sm:text-7xl">
              ABOUT
            </span>

            {/* Small Heading */}
            <div className="relative mb-4 flex items-center gap-3">
              <span className="h-[3px] w-10 bg-blue-600" />

              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
                About Us
              </p>
            </div>

            {/* Main Heading */}
            <h2 className="max-w-[650px] text-4xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-5xl lg:text-[52px]">
              Pure Water , <span className="text-blue-600">Better Life</span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-[650px] text-[15px] leading-7 text-gray-600 sm:text-base">
              JNJ Aqua is a trusted RO Cabinet Manufacturer and Water Purifier
              Manufacturer, offering high-quality RO cabinets, water purifiers,
              RO spare parts, and accessories. We are committed to delivering
              durable products with excellent quality, modern designs, and
              competitive pricing to meet the needs of the water purification
              industry..
            </p>

            <p className="mt-4 max-w-[650px] text-[15px] leading-7 text-gray-600 sm:text-base">
              From RO systems to advanced water purification solutions, we focus
              on quality, efficiency, and long-lasting performance to ensure
              every drop of water is cleaner and safer.
            </p>

            {/* Services */}
            <div className="mt-7">
              <h3 className="mb-4 text-base font-bold text-gray-900">
                We Provide:
              </h3>

              <div className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                {[
                  "RO Cabinets",
                  "Water Purifiers",
                  "RO Spare Parts",
                  "RO Cabinet Accessories",
                  "Water Purifier Components",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm font-medium text-gray-700"
                  >
                    <FaCheckCircle className="shrink-0 text-blue-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/about-us"
                className="group inline-flex items-center gap-3 rounded-lg bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-black hover:shadow-xl"
              >
                Read More
                <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              {/* <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-7 py-3.5 text-sm font-semibold text-gray-900 transition-all duration-300 hover:border-blue-600 hover:text-blue-600"
              >
                Get Quote
              </Link> */}
            </div>
          </div>
        </div>
      </section>

      {/* products2 */}

      <section className="w-full bg-[#f3f3f3] px-4 py-6  md:py-12">
        <div className="mx-auto max-w-[1200px]">
          {/* Heading */}
          <div className="mb-7 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Buy Aquafresh RO System in India
            </h2>
          </div>

          {/* Product Slider */}
          <div className="relative">
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: ".ro-products-next",
                prevEl: ".ro-products-prev",
              }}
              spaceBetween={8}
              slidesPerView={1.15}
              breakpoints={{
                480: {
                  slidesPerView: 1.5,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
              }}
              className="!pb-3"
            >
              {products2.map((product) => (
                <SwiperSlide key={product.title}>
                  <div className="group relative overflow-hidden bg-[#f3f3f3]">
                    {/* Product Image */}
                    <Link href={product.href}>
                      <div className="relative aspect-square w-full overflow-hidden bg-gray-200">
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          sizes="
                          (max-width: 480px) 85vw,
                          (max-width: 640px) 50vw,
                          (max-width: 768px) 30vw,
                          20vw
                        "
                          className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      </div>
                    </Link>

                    {/* Product Details */}
                    <div className="px-2 py-3 text-center">
                      {/* Category */}

                      {/* Product Name */}
                      <Link href="/products">
                        <h3 className="text-[19px] font-medium leading-5 text-gray-800 transition-colors hover:text-blue-600">
                          {product.title}
                        </h3>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Previous */}
            <button
              type="button"
              aria-label="Previous products"
              className="ro-products-prev absolute left-0 top-[42%] z-20 hidden h-10 w-10 -translate-x-5 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-800 shadow-md transition-all hover:bg-blue-600 hover:text-white lg:flex"
            >
              <FaArrowRight className="rotate-180 text-sm" />
            </button>

            {/* Next */}
            <button
              type="button"
              aria-label="Next products"
              className="ro-products-next absolute right-0 top-[42%] z-20 hidden h-10 w-10 translate-x-5 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-800 shadow-md transition-all hover:bg-blue-600 hover:text-white lg:flex"
            >
              <FaArrowRight className="text-sm" />
            </button>
          </div>
        </div>
      </section>

      {/* desgin section */}
      <section className="overflow-hidden bg-white px-5 py-6 md:py-14">
        <div className="mx-auto max-w-7xl">
          {/* Heading */}
          <div className="mb-12 text-center lg:mb-16">
            <h2 className="text-3xl font-medium tracking-tight text-slate-600 sm:text-4xl lg:text-[38px]">
              Futuristic Design With Salient Features
            </h2>
          </div>

          {/* Main Content */}
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr_1fr] lg:gap-8">
            {/* LEFT FEATURES */}
            <div className="order-2 flex flex-col gap-10 lg:order-1 lg:gap-12">
              {featuresLeft.map((feature, index) => (
                <Feature key={index} feature={feature} />
              ))}
            </div>

            {/* CENTER IMAGE */}
            <div className="relative order-1 flex justify-center lg:order-2">
              {/* Soft background glow */}
              <div className="absolute inset-0 -z-0 rounded-full bg-sky-100/40 blur-3xl" />

              {/* Decorative circles */}
              <div className="absolute left-1/2 top-1/2 -z-0 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-100 sm:h-[350px] sm:w-[350px] lg:h-[420px] lg:w-[420px]" />

              <div className="absolute left-1/2 top-1/2 -z-0 h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-100 sm:h-[280px] sm:w-[280px] lg:h-[340px] lg:w-[340px]" />

              {/* Your purifier image */}
              <img
                src="/citypage/alive-ro.webp"
                alt="RO Cabinet Manufacturer"
                className="relative z-10 h-auto w-[230px] object-contain md:w-[380px] "
              />

              {/* Floating icons */}
              <FloatingIcon className="left-[4%] top-[8%]">pH</FloatingIcon>

              <FloatingIcon className="right-[4%] top-[8%]">Mg²⁺</FloatingIcon>

              <FloatingIcon className="left-[-2%] top-[43%]">Ca²⁺</FloatingIcon>

              <FloatingIcon className="right-[-2%] top-[43%]">
                HCO₃
              </FloatingIcon>

              <FloatingIcon className="bottom-[8%] left-[6%]">Cl⁻</FloatingIcon>

              <FloatingIcon className="bottom-[8%] right-[6%]">
                Na⁺
              </FloatingIcon>
            </div>

            {/* RIGHT FEATURES */}
            <div className="order-3 flex flex-col gap-10 lg:gap-12">
              {featuresRight.map((feature, index) => (
                <Feature key={index} feature={feature} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* why choose */}
      <section className="relative overflow-hidden bg-white px-5 py-6 md:py-12">
        {/* Background Decoration */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-600/[0.04]" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-blue-600/[0.04]" />

        <div className="relative mx-auto max-w-[1400px]">
          {/* ================= HEADER ================= */}
          <div className="mx-auto mb-12 max-w-4xl text-center lg:mb-16">
            {/* Small Label */}
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-[2px] w-8 bg-blue-600" />

              <span className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
                Why Choose Us
              </span>

              <span className="h-[2px] w-8 bg-blue-600" />
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Why Choose JNJ Aqua as a{" "}
              <span className="text-blue-600">
                RO Cabinet Manufacturer in {city}s?
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-600">
              At{" "}
              <strong className="font-semibold text-gray-900">JNJ Aqua</strong>,
              we are committed to providing high-quality{" "}
              <strong className="font-semibold text-gray-900">
                RO cabinets, water purifiers, RO spare parts, and accessories in{" "}
                {city}
              </strong>
              . As a trusted{" "}
              <strong className="font-semibold text-gray-900">
                RO Cabinet Manufacturer in {city}
              </strong>{" "}
              and{" "}
              <strong className="font-semibold text-gray-900">
                Water Purifier Manufacturer in {city}
              </strong>
              , we focus on quality, durability, competitive pricing, and
              customer satisfaction.
            </p>
          </div>

          {/* ================= FEATURE GRID ================= */}
          <div className="grid gap-5 md:px-20 sm:grid-cols-2 lg:grid-cols-3">
            {features3.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-600/30 hover:shadow-xl"
                >
                  {/* Top Blue Line */}
                  <div className="absolute left-0 right-0 top-0 h-1 origin-left scale-x-0 bg-blue-600 transition-transform duration-300 group-hover:scale-x-100" />

                  {/* Number */}
                  <span className="absolute right-5 top-4 text-5xl font-black text-gray-100 transition-colors duration-300 group-hover:text-blue-600/[0.08]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Icon */}
                  <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon className="text-xl" />
                  </div>

                  {/* Content */}
                  <h3 className="relative text-xl font-bold text-gray-900">
                    {feature.title}
                  </h3>

                  <p className="relative mt-3 text-sm leading-6 text-gray-600">
                    {feature.description}
                  </p>

                  {/* Bottom Accent */}
                  <div className="mt-6 h-px w-10 bg-blue-600 transition-all duration-300 group-hover:w-full" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* form */}
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

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-[1fr_1fr_1fr_1fr_auto]">
              {/* Name */}
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                disabled={loading}
                onChange={(e) => setName(e.target.value)}
                className="h-15 w-full rounded-2xl border border-blue-300 bg-slate-50 px-5 text-[15px] outline-none transition focus:border-blue-600 focus:bg-white"
              />

              {/* Email */}
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="h-15 w-full rounded-2xl border border-blue-300 bg-slate-50 px-5 text-[15px] outline-none transition focus:border-blue-600 focus:bg-white"
              />

              {/* Phone */}
              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                disabled={loading}
                onChange={(e) => {
                  const onlyNums = e.target.value.replace(/[^0-9]/g, "");
                  setPhone(onlyNums.slice(0, 10));
                }}
                maxLength={10}
                pattern="[0-9]{10}"
                required
                className="h-15 w-full rounded-2xl border border-blue-300 bg-slate-50 px-5 text-[15px] outline-none transition focus:border-blue-600 focus:bg-white"
              />

              {/* Requirement */}

              <select
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                className="h-15 w-full rounded-2xl border border-blue-300 bg-slate-50 px-5 text-[15px] outline-none transition focus:border-blue-600 focus:bg-white"
                required
                disabled={loading}
              >
                <option value="" disabled>
                  Select Product
                </option>

                <option value="RO Cabinets">RO Cabinets</option>

                <option value="Alkaline Filter">Alkaline Filter</option>

                <option value="Inline Filter">Inline Filter</option>

                <option value="Membrane">Membrane</option>

                <option value="Pre Filter">Pre Filter</option>

                <option value="Pump">Pump</option>
              </select>

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
          <p className="text-center mt-2 md:mt-4 font-medium text-lg text-blue-700">
            {successMessage}
          </p>
        </div>
      </section>

      {/* faq */}
      <Faq2 />

      <CTA />
    </>
  );
}
