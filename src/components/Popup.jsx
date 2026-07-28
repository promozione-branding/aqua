"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
// import { toast } from "react-toastify";


export default function Popup({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // FORM STATES
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [product, setProduct] = useState("");
  const [place, setPlace] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");


  if (!isOpen) return null;


  // SUBMIT FORM
  const submitForm = async () => {
//     try {
//       setLoading(true);

//       const formData = {
//         platform: "Plastic Dustbin Manufacturer Popup Form",
//         platformEmail: "shaanpolywell@gmail.com",
//         name,
//         phone,
//         email,
//         place: place,
//         product,
//         message: `Company Name: ${company || "N/A"} ,"Message :"

// ${message}`
//       };

//       const { data } = await axios.post(
//         "https://brandbnalo.com/api/form/add",
//         formData
//       );

//       if (data?.success) {
//         setSubmitted(true);

//         setSuccessMessage(
//           "✅ Your enquiry has been submitted successfully!"
//         );

//         toast.success("Form Submitted Successfully");

//         const whatsappText = `Hi, I am ${name}.
// Email: ${email}
// Product: ${product}

// Message: ${message}

// Contact: ${phone}`;

//         const waUrl = `https://wa.me/+918810422935?text=${encodeURIComponent(
//           whatsappText
//         )}`;

//         setTimeout(() => {
//           window.open(waUrl, "_blank");
//         }, 1000);

//         // RESET
//         setName("");
//         setPhone("");
//         setEmail("");
//         setProduct("");
//         setMessage("");
//         setPlace("");
//         setCompany("");
//         // setOtp("");

//         // setShowOtpBox(false);
//         // setIsPhoneVerified(false);

//         setTimeout(() => {
//           setSubmitted(false);
//           onClose();
//         }, 4000);
//       } else {
//         setSuccessMessage("❌ Failed to send. Please try again.");
//       }
//     } catch (error) {
//       console.log(error);

//       setSuccessMessage("❌ Server error. Try again later.");
//     } finally {
//       setLoading(false);
//     }
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
    <div onClick={onClose}  className="fixed inset-0  flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
      <div onClick={(e)=>{e.stopPropagation()}}  className="relative rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-4 md:p-10 w-[350px] md:w-[560px] bg-white">

        <button
          className="absolute top-4 right-5 text-gray-400 hover:text-red-500 text-xl transition"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-800 tracking-wide">
          Get In Touch With Us
        </h2>

        <div className="w-20 h-[3px] bg-blue-600 mx-auto mt-3 mb-8 rounded-full"></div>

        {!submitted ? (
          <form className=" space-y-2 md:space-y-5" onSubmit={handleSubmit}>

            <div className="flex flex-col md:flex-row gap-4">

              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="flex-1 p-2 md:p-3 rounded-lg text-gray-800 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                required
                disabled={loading}
              />

              <select
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                className="p-2 md:p-3 rounded-md w-full bg-white/95 text-gray-800 outline-none border border-gray-300 focus:ring-2 focus:ring-[#F7C600]"
                required
                disabled={loading}
              >
                <option value="" disabled>
                  Select Product
                </option>

                <option value="RO Cabinets">
                 RO Cabinets
                </option>

                <option value="Alkaline Filter">
                 Alkaline Filter
                </option>

                <option value="Inline Filter">
                  Inline Filter
                </option>

                <option value="Membrane">
                  Membrane
                </option>

                <option value="Pre Filter">
                  Pre Filter
                </option>

                <option value="Pump">
                  Pump
                </option>

                
              </select>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="tel"
                value={phone}
                onChange={(e) =>
                  setPhone(e.target.value.replace(/\D/g, ""))
                }
                maxLength={10}
                minLength={10}
                placeholder="Phone Number"
                className="w-full p-2 md:p-3 rounded-lg text-gray-800 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                required
                disabled={loading}
              />
              <input
                type="text"
                value={place}
                onChange={(e) =>
                  setPlace(e.target.value)
                }
                placeholder="Place"
                className="w-full p-2 md:p-3 rounded-lg text-gray-800 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                required
                disabled={loading}
              />
            </div>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="w-full p-2 md:p-3 rounded-lg text-gray-800 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              required
              disabled={loading}
            />
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Company Name"
              className="w-full p-2 md:p-3 rounded-lg text-gray-800 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              required
              disabled={loading}
            />

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message"
              className="w-full p-2 md:p-3 rounded-lg text-gray-800 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-28 resize-none transition"
              required
              disabled={loading}
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-blue-700 hover:bg-blue-800 transition rounded-lg font-semibold text-white text-md tracking-wide shadow-sm"
            >
              {loading ? "Loading..." : "Submit Enquiry"}
            </button>

          </form>
        ) : (
          <p className="text-center font-medium text-lg text-blue-700">
            {successMessage}
          </p>
        )}
      </div>
    </div>
  );
}