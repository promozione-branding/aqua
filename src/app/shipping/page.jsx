import Image from "next/image";
import React from "react";

const Shipping = () => {
  return (
    <div className="bg-gray-80 min-h-screen ">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.12),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_45%)]" />

        <div className="relative max-w-7xl mx-auto px-6 py-8 lg:py-14">
          {/* <span className="inline-block rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
            CONTACT US
          </span> */}

          <h1 className="mt-6 text-3xl md:text-7xl font-bold leading-tight text-slate-900">
            Shipping Policy{" "}
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-600">
            At JNJ Aqua, we are committed to ensuring safe and reliable delivery
            of our products. Our modern facilities and experienced team enable
            us to carefully process, package, and dispatch every order with
            attention to quality.{" "}
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-5">
        <div className="bg-white rounded-3xl p-8 md:p-12 space-y-10">
          {/* 1 */}
          <section>
            <h2 className="text-2xl font-bold text-[#062347] mb-4">
              1. Order Processing
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-7">
              <li>
                All orders are processed after confirmation of payment and order
                details.
              </li>
              <li>
                Standard processing time is <strong>2–5 business days</strong>,
                depending on product availability and customization
                requirements.
              </li>
              <li>
                Processing time for bulk or customized machinery may vary and
                will be communicated in advance.
              </li>
            </ul>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-2xl font-bold text-[#062347] mb-4">
              2. Shipping & Delivery Time
            </h2>

            <p className="text-gray-700 mb-4">
              Delivery timelines depend on your location and the type of product
              ordered.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border rounded-2xl p-6 bg-gray-50">
                <h3 className="font-semibold text-lg mb-2">Metro Cities</h3>
                <p className="text-3xl font-bold text-[#062347]">5–7 Days</p>
              </div>

              <div className="border rounded-2xl p-6 bg-gray-50">
                <h3 className="font-semibold text-lg mb-2">Other Locations</h3>
                <p className="text-3xl font-bold text-[#062347]">7–14 Days</p>
              </div>
            </div>

            <p className="text-gray-700 mt-5">
              Remote or rural areas may require additional delivery time.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-2xl font-bold text-[#062347] mb-4">
              3. Shipping Charges
            </h2>

            <p className="text-gray-700 mb-3">
              Shipping charges are calculated based on:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Product weight and Packaging</li>
              <li>Delivery location</li>
              <li>Mode of transport</li>
            </ul>

            <p className="text-gray-700 mt-4">
              Final shipping charges will be shared during order confirmation.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-2xl font-bold text-[#062347] mb-4">
              4. Delivery Method
            </h2>

            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                We work with trusted logistics partners for safe and reliable
                delivery.
              </li>
              <li>
                Heavy machinery may be transported using specialized carriers.
              </li>
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-2xl font-bold text-[#062347] mb-4">
              5. Order Tracking
            </h2>

            <p className="text-gray-700">
              Once your order is dispatched, tracking details or transport
              information will be shared via phone or email.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-2xl font-bold text-[#062347] mb-4">
              6. Delivery Guidelines
            </h2>

            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>
                The customer or an authorized representative must be available
                at the delivery location.
              </li>
              <li>
                Customers should arrange unloading equipment such as cranes or
                forklifts if required.
              </li>
              <li>
                Please inspect the product carefully upon delivery for any
                visible damage.
              </li>
            </ul>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-2xl font-bold text-[#062347] mb-4">
              7. Damaged or Delayed Shipments
            </h2>

            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>
                Report damaged products within <strong>24 hours</strong> along
                with photos or videos for verification.
              </li>

              <li>
                Delivery delays caused by weather conditions, transportation
                issues, strikes, or other unforeseen events may occur.
              </li>
            </ul>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-2xl font-bold text-[#062347] mb-4">
              8. Service Availability
            </h2>

            <p className="text-gray-700">
              We currently ship across India. For international orders, please
              contact us directly to discuss availability and shipping options.
            </p>
          </section>

          {/* 9 Contact */}
          <section className="bg-gray-100 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-[#062347] mb-6">
              9. Contact Us
            </h2>

            <div className="space-y-4 text-gray-700">
              <p>
                <strong>Company:</strong> Jnj Aqua
              </p>

              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:jnjaquadelhi@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  jnjaquadelhi@gmail.com
                </a>{" "}
                
              </p>

              <p>
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:+918595776029"
                  className="text-blue-600 hover:underline"
                >
                  +91 85957 76029
                </a>{" "}
                <a
                  href="tel:+919315556737"
                  className="text-blue-600 hover:underline"
                >
                  +91 93155 56737
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
