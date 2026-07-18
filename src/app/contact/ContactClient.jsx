"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, ChevronDown } from "lucide-react";
import Link from "next/link";
export default function ContactClient() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //   if (!form.name || !form.phone) {
    //     toast.error("Please fill Name & Phone Number");
    //     return;
    //   }

    //   try {
    //     setLoading(true);

    //     const payload = {
    //       platform: "ARB Bearings Contact Form",
    //       platformEmail: "marketing@arb-bearings.com",

    //       name: form.name,
    //       phone: form.phone,
    //       email: form.email || "N/A",

    //       place: form.company || "N/A",

    //       product: form.subject || "General Inquiry",

    //       message: `
    // Company : ${form.company}

    // Subject : ${form.subject}

    // Message :
    // ${form.message}
    //       `,
    //     };

    //     const { data } = await axios.post(
    //       "https://brandbnalo.com/api/form/add",
    //       payload
    //     );

    //     if (data.success) {
    //       toast.success("Inquiry Submitted Successfully!");

    //       setForm({
    //         name: "",
    //         company: "",
    //         email: "",
    //         phone: "",
    //         subject: "",
    //         message: "",
    //       });
    //     } else {
    //       toast.error("Submission Failed");
    //     }
    //   } catch (err) {
    //     console.log(err);
    //     toast.error("Server Error");
    //   } finally {
    //     setLoading(false);
    //   }
  };

  const contactCards = [
    {
      icon: Phone,
      title: "Call Us",
      value: ["+(91)-(11)-41440071", "+(91)-(11)-45093933"],
    },
    {
      icon: Mail,
      title: "Email",
      value: [
        "marketing@arb-bearings.com",
        "oem@arb-bearings.com",
        "export@arb-bearings.com",
      ],
    },
    {
      icon: MapPin,
      title: "Address",
      value: ["H-22, Udyog Nagar,", "New Delhi - 110041, Delhi, India"],
    },
    {
      icon: Clock,
      title: "Working Hours",
      value: ["Monday - Saturday", "9:00 AM - 6:00 PM"],
    },
  ];

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
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.12),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_45%)]" />

        <div className="relative max-w-7xl mx-auto px-6 py-14">
          <span className="inline-block rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
            CONTACT US
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight text-slate-900">
            Your Trusted Partner for
            <br />
            RO Cabinets & Spare Parts
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-600">
            From durable RO cabinets to premium spare parts, we deliver reliable
            products designed for long-lasting performance.
          </p>
        </div>
      </section>

      <div className="relative w-full ">
        <svg
          className="absolute z-10 opacity-30"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#0099ff"
            fill-opacity="1"
            d="M0,192L60,170.7C120,149,240,107,360,80C480,53,600,43,720,53.3C840,64,960,96,1080,96C1200,96,1320,64,1380,48L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>

        <section className="max-w-7xl z-50 mx-auto px-6 py-10 grid lg:grid-cols-2 gap-10 items-start">
          <div className="rounded-[32px] z-50 border border-slate-200 bg-white p-8 lg:p-10 shadow-xl">
            <h2 className=" text-3xl font-bold text-slate-900">
              Send an Inquiry
            </h2>

            <p className="mt-3 text-slate-600">
              Fill out the form below and our team will get back to you .
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-4 grid md:grid-cols-2 gap-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                value={form.name}
                onChange={handleChange}
                required
                className="h-14 rounded-2xl border border-slate-300 px-5 outline-none transition-all duration-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              />

              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={form.company}
                onChange={handleChange}
                className="h-14 rounded-2xl border border-slate-300 px-5 outline-none transition-all duration-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className="h-14 rounded-2xl border border-slate-300 px-5 outline-none transition-all duration-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              />

              <input
                type="tel"
                name="phone"
                maxLength={10}
                minLength={10}
                placeholder="Phone Number *"
                value={form.phone}
                onChange={handleChange}
                required
                className="h-14 rounded-2xl border border-slate-300 px-5 outline-none transition-all duration-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              />

              <input
                type="text"
                name="subject"
                placeholder="Product"
                value={form.subject}
                onChange={handleChange}
                className="md:col-span-2 h-14 rounded-2xl border border-slate-300 px-5 outline-none transition-all duration-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              />

              <textarea
                rows={3}
                name="message"
                placeholder="Write your message..."
                value={form.message}
                onChange={handleChange}
                className="md:col-span-2 rounded-2xl border border-slate-300 p-5 resize-none outline-none transition-all duration-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              />

              <button
                type="submit"
                disabled={loading}
                className="md:col-span-2 flex h-14 items-center justify-center gap-3 rounded-2xl bg-blue-700 text-white font-semibold transition-all duration-300 hover:bg-blue-800 hover:shadow-lg hover:shadow-blue-200 disabled:opacity-60"
              >
                {loading ? "Submitting..." : "Send Inquiry"}

                <Send size={18} />
              </button>
            </form>
          </div>

          <div className="rounded-3xl border z-50 border-slate-200 bg-white p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-slate-900">
              Office Information
            </h3>

            <div className="mt-8 space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                  <MapPin className="h-5 w-5 text-blue-700" />
                </div>

                <div>
                  <p className="font-semibold text-slate-900">Address</p>

                  <div className="mt-1 block text-slate-600 transition ">
                    Plot No 27, Pocket N, Sector 3, Bawana Industrial Area
                    <br />
                    New Delhi - 110039, Delhi, India
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                  <Phone className="h-5 w-5 text-blue-700" />
                </div>

                <div>
                  <p className="font-semibold text-slate-900">Phone</p>

                  <a
                    href="tel:+911141440071"
                    className="mt-1 block text-slate-600 transition hover:text-blue-700"
                  >
                    + 91 7949347105
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                  <Mail className="h-5 w-5 text-blue-700" />
                </div>

                <div>
                  <p className="font-semibold text-slate-900">Email</p>

                  <a
                    href=""
                    className="mt-1 block text-slate-600 transition hover:text-blue-700"
                  >
                    jnjaqua@gmail.com
                  </a>

                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                  <Clock className="h-5 w-5 text-blue-700" />
                </div>

                <div>
                  <p className="font-semibold text-slate-900">Working Hours</p>

                  <p className="mt-1 text-slate-600">
                    Monday – Saturday
                    <br />
                    9:00 AM – 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <iframe
          className="w-full h-[420px] rounded-3xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27969.61990593087!2d77.0539105!3d28.803039099999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390da822bdf1dae1%3A0x549a8fcadeefa83c!2sBawana%2C%20Delhi%2C%20110039!5e0!3m2!1sen!2sin!4v1784360591355!5m2!1sen!2sin"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-24">
        <h2 className="text-4xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map(([q, a], i) => (
            <div
              key={i}
              className="rounded-2xl border border-blue-400 overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full flex justify-between p-5 text-left"
              >
                <span>{q}</span>
                <ChevronDown
                  className={
                    open === i ? "rotate-180 transition" : "transition"
                  }
                />
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-slate-900">{a}</div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
