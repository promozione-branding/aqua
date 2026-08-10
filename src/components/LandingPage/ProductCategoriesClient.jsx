"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function ProductCategoriesClient({ categories = [] }) {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [product, setProduct] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const submitForm = async () => {
    try {
      setLoading(true);

      const formData = {
        platform: "Aqua JNJ",
        platformEmail: "jnjaquadelhi@gmail.com",
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
    <section className="w-full bg-[#fafafa] py-7 lg:py-14 overflow-hidden">
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
              {categories.map((item, index) => (
                <SwiperSlide key={index} className="!h-auto flex">
                  <Link
                    href={`/products/${item.categorySlug}/${item.slug}`}
                    className="w-full flex"
                  >
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
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* WHOLESALE FORM */}
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
    </section>
  );
}
