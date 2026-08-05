"use client"
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQPage() {
const [open, setOpen] = useState(0);

const faqs = [
[
"What RO products do you manufacture?",
"We manufacture and supply high-quality RO cabinets, membranes, filters, pumps, fittings, and a wide range of water purifier spare parts."
],
[
"Do you accept bulk and OEM orders?",
"Yes. We specialize in bulk orders, OEM manufacturing, and customized solutions for distributors, dealers, and brands."
],
[
"Can I request a product quotation?",
"Absolutely. Contact us with your product requirements, quantities, and specifications, and our team will provide a competitive quotation."
],
[
"Do you ship products across India?",
"Yes, we supply RO cabinets and spare parts to customers across India with safe and timely delivery."
],
[
"How can I contact your sales team?",
"You can reach us through our contact form, phone, WhatsApp, or email. Our team will respond as quickly as possible."
],
];

return (
<div className="bg-white text-[#062347]">

  {/* Hero Section */}
  <section className="bg-gradient-to-r from-[#062347] to-[#0a3d7a] text-white py-6 md:py-20 px-6 text-center">
    <h1 className="text-3xl md:text-5xl font-bold mb-4">
      Frequently Asked Questions
    </h1>
    <p className="max-w-2xl mx-auto md:text-lg text-gray-200">
      Find answers to common questions about our RO products, bulk orders,
      shipping, and services. If you need more help, feel free to contact us.
    </p>
  </section>

  {/* FAQ Section */}
  <section className="max-w-4xl mx-auto px-6 py-6 lg:pb-14">
    <div className="space-y-4">
      {faqs.map(([q, a], i) => (
        <div
          key={i}
          className="rounded-2xl border border-blue-300 overflow-hidden bg-white shadow-sm"
        >
          <button
            onClick={() => setOpen(open === i ? -1 : i)}
            className="w-full flex justify-between items-center p-5 text-left font-medium"
          >
            <span>{q}</span>
            <ChevronDown
              className={`transition-transform duration-300 ${
                open === i ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            className={`px-5 text-gray-700 transition-all duration-300 ease-in-out overflow-hidden ${
              open === i ? "max-h-40 opacity-100 pb-5" : "max-h-0 opacity-0"
            }`}
          >
            {a}
          </div>
        </div>
      ))}
    </div>
  </section>

</div>

);
}