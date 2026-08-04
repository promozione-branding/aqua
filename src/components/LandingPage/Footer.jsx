"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

export default function Footer() {
  const pathname = usePathname();

  // Hide footer on admin routes
  const adminLayout = pathname?.startsWith("/admin");
  if (adminLayout) return null;

  return (
    <footer className="bg-[#0F172A] text-white pt-16 font-sans border-t border-slate-800/80 shadow-[0_-4px_20px_rgba(0,0,0,0.2)] relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Astride 5-Column Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.4fr]  gap-y-12 pb-12">
          {/* Brand Section */}
          <div className="col-span-2 md:col-span-1 pr-4">
            <Link
              href="/"
              aria-label="JNJ AQUA home"
              className="inline-flex items-center group"
            >
              <h1 className="text-3xl font-extrabold tracking-tight text-white group-hover:text-blue-50 transition-colors">
                JNJ AQUA
              </h1>
            </Link>
            <p className="text-slate-400 text-sm mt-5 max-w-[280px] leading-relaxed">
              Manufacturer of premium RO Cabinets & Spare Parts. Delivering
              quality, innovation, and customized solutions for businesses
              across India.
            </p>
            <div className="flex gap-3 mt-7">
              {[
                { Icon: FaInstagram, label: "Instagram", href: "#" },
                { Icon: FaFacebookF, label: "Facebook", href: "#" },
                { Icon: FaLinkedinIn, label: "LinkedIn", href: "#" },
                { Icon: FaYoutube, label: "YouTube", href: "#" },
              ].map(({ Icon, label, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-slate-700 bg-slate-800/50 flex items-center justify-center text-slate-300 transition-all duration-300 hover:bg-blue-600 hover:border-blue-500 hover:text-white hover:-translate-y-1 hover:shadow-[0_4px_14px_rgba(37,99,235,0.4)]"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-xs uppercase tracking-[0.15em] mb-6 text-slate-100 font-bold">
              Quick Links
            </h4>
            <div className="flex flex-col space-y-3">
              {[
                { name: "Home", link: "/" },
                { name: "About Us", link: "/about" },
                { name: "Products", link: "/products" },
                { name: "Blogs", link: "/blogs" },
                { name: "Contact Us", link: "/contact" },
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="w-fit text-slate-400 text-sm transition-all duration-300 hover:text-blue-400 hover:translate-x-1 font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Our Products (with Left Border) */}
          <div className="col-span-1 lg:border-l lg:border-slate-800 lg:pl-8">
            <h4 className="text-xs uppercase tracking-[0.15em] mb-6 text-slate-100 font-bold">
              Our Products
            </h4>
            <div className="flex flex-col space-y-3">
              {[
                { name: "RO Cabinets", link: "/products/ro-cabinets" },
                { name: "Spare Parts", link: "/products/spare-parts" },
                { name: "RO Components", link: "/products/components" },
                { name: "Commercial RO", link: "/products/commercial-ro" },
                { name: "Accessories", link: "/products/accessories" },
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="w-fit text-slate-400 text-sm transition-all duration-300 hover:text-blue-400 hover:translate-x-1 font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Help Links (with Left Border) */}
          <div className="col-span-1 lg:border-l lg:border-slate-800 lg:pl-8">
            <h4 className="text-xs uppercase tracking-[0.15em] mb-6 text-slate-100 font-bold">
              Legal & Help
            </h4>
            <div className="flex flex-col space-y-3">
              {[
                { name: "Privacy Policy", link: "/privacy-policy" },
                { name: "Terms & Conditions", link: "/terms-conditions" },
                { name: "Refund Policy", link: "/refund-policy" },
                { name: "Shipping Policy", link: "/shipping-policy" },
                { name: "FAQs", link: "/#faq" },
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="w-fit text-slate-400 text-sm transition-all duration-300 hover:text-blue-400 hover:translate-x-1 font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Us (with Left Border) */}
          <div className="col-span-1 lg:border-l lg:border-slate-800 lg:pl-8">
            <h4 className="text-xs uppercase tracking-[0.15em] mb-6 text-slate-100 font-bold">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-2.5 group">
                <MapPin
                  className="text-blue-500 shrink-0 mt-0.5 transition-transform group-hover:scale-110"
                  size={18}
                />
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed transition-colors group-hover:text-slate-200">
                  J 248, Pocket N, Sector 3, Bawana
                  <br className="hidden md:block" />
                  New Delhi - 110039, Delhi, India
                </p>
              </div>

              <div className="flex items-start gap-2.5 group">
                <Phone
                  className="text-blue-500 shrink-0 mt-1 transition-transform group-hover:scale-110"
                  size={16}
                />

                <div className="flex flex-col">
                  {[
                    "+91 85957 76029",
                    "+91 93155 56737",
                    "+91 83185 96477",
                  ].map((num, i) => (
                    <a
                      key={i}
                      href={`tel:${num.replace(/\s/g, "")}`}
                      className="text-slate-400 text-xs sm:text-sm font-medium transition-colors hover:text-blue-400"
                    >
                      {num}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2.5 group">
                <Mail
                  className="text-blue-500 shrink-0 transition-transform group-hover:scale-110"
                  size={16}
                />
                <a
                  href="mailto:jnjaquadelhi@gmail.com"
                  className="text-slate-400 text-xs sm:text-sm transition-colors group-hover:text-blue-400 font-medium break-all"
                >
                  jnjaquadelhi@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <span className="font-medium">
            © {new Date().getFullYear()} JNJ AQUA. All Rights Reserved.
          </span>
          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-blue-400 transition-colors font-medium"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-conditions"
              className="hover:text-blue-400 transition-colors font-medium"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
