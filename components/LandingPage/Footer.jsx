import {
  MapPin,
  Phone,
  Mail,
  Globe,
  ArrowRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-gray-300">
      {/* Top */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid gap-12 lg:grid-cols-5 md:grid-cols-2">

          {/* Company */}
          <div className="lg:col-span-2">
            {/* <img
              src="/logo.png"
              alt="Crystal Impex"
              className="h-14 mb-6"
            /> */}
            <h1 className="text-3xl ">JNJ AQUA</h1>

            <p className="leading-7 mt-5 text-gray-400 max-w-md">
              Manufacturer of premium RO Cabinets & Spare Parts.
              Delivering quality, innovation and customized solutions
              for businesses across India.
            </p>

            <div className="flex gap-4 mt-8">
              {[
                FaFacebookF,
                FaInstagram,
                FaLinkedinIn,
                FaYoutube,
              ].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-11 h-11 rounded-full border border-white/10 bg-white/5 hover:bg-blue-600 hover:border-blue-600 transition flex items-center justify-center"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {[
                "Home",
                "About Us",
                "Products",
                "OEM Solutions",
                "Dealer Zone",
                "Contact Us",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="flex items-center gap-2 hover:text-blue-400 transition"
                  >
                    <ArrowRight size={15} />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">
              Our Products
            </h3>

            <ul className="space-y-4">
              {[
                "RO Cabinets",
                "Spare Parts",
                "RO Components",
                "Commercial RO",
                "Accessories",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="flex items-center gap-2 hover:text-blue-400 transition"
                  >
                    <ArrowRight size={15} />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">
              Contact Us
            </h3>

            <div className="space-y-5">

              <div className="flex gap-4">
                <MapPin
                  className="text-blue-500 mt-1 shrink-0"
                  size={20}
                />
                <p className="text-gray-400">
                  B-103, Industrial Area,
                  <br />
                  Sector-63, Noida,
                  <br />
                  Uttar Pradesh 201301
                </p>
              </div>

              <div className="flex gap-4">
                <Phone
                  className="text-blue-500 shrink-0"
                  size={18}
                />
                <a
                  href="tel:+919876543210"
                  className="hover:text-blue-400"
                >
                  +91 79493 47105

                </a>
              </div>

              <div className="flex gap-4">
                <Mail
                  className="text-blue-500 shrink-0"
                  size={18}
                />
                <a
                  href="mailto:info@crystalimpex.com"
                  className="hover:text-blue-400"
                >
                  info@crystalimpex.com
                </a>
              </div>

              <div className="flex gap-4">
                <Globe
                  className="text-blue-500 shrink-0"
                  size={18}
                />
                <a
                  href="https://crystalimpex.com"
                  className="hover:text-blue-400"
                >
                  www.crystalimpex.com
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10"></div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} Crystal Impex. All Rights
          Reserved.
        </p>

        <div className="flex gap-6">
          <a href="#" className="hover:text-blue-400">
            Privacy Policy
          </a>

          <a href="#" className="hover:text-blue-400">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}