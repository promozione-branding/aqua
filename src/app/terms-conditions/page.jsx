import React from "react";

export default function TermsConditions() {
  return (
    <div className="bg-gray-80 min-h-screen">

      {/* Top Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.12),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_45%)]" />

        <div className="relative max-w-7xl mx-auto px-6 py-8 lg:py-14">
          <h1 className="mt-6 text-3xl md:text-7xl font-bold leading-tight text-slate-900">
            Terms & Conditions
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-600">
            These terms govern your use of JNJ Aqua’s website and services.
            By accessing or purchasing from us, you agree to comply with the
            following terms and conditions.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-5">
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-6">
          <div className="bg-white rounded-2xl p-6 md:p-10">

            {/* Intro */}
            <p className="text-gray-700 leading-8 mb-8">
              Welcome to <strong className="text-[#062347]">JNJ Aqua</strong>. By using our
              website, purchasing our products, or engaging with our services,
              you agree to the following terms and conditions. Please read them
              carefully before proceeding.
            </p>

            {/* 1 */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-[#062347] mb-4">
                1. Use of Website
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>You agree to use this website for lawful purposes only.</li>
                <li>You must not misuse, disrupt, or attempt unauthorized access.</li>
                <li>All content is for informational and commercial use only.</li>
              </ul>
            </div>

            {/* 2 */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-[#062347] mb-4">
                2. Product Information
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>We strive to ensure accurate product details and pricing.</li>
                <li>Minor variations may occur due to manufacturing or display.</li>
                <li>We reserve the right to update product details at any time.</li>
              </ul>
            </div>

            {/* 3 */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-[#062347] mb-4">
                3. Orders & Payments
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Orders are confirmed only after successful payment.</li>
                <li>We reserve the right to cancel or refuse any order.</li>
                <li>Pricing and availability are subject to change without notice.</li>
              </ul>
            </div>

            {/* 4 */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-[#062347] mb-4">
                4. Shipping & Delivery
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Delivery timelines are estimates and may vary.</li>
                <li>Delays due to external factors are not under our control.</li>
                <li>Refer to our Shipping Policy for detailed information.</li>
              </ul>
            </div>

            {/* 5 */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-[#062347] mb-4">
                5. Returns & Refunds
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Returns are subject to our Return & Refund Policy.</li>
                <li>Certain items may not be eligible for return.</li>
                <li>Refunds are processed after inspection and approval.</li>
              </ul>
            </div>

            {/* 6 */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-[#062347] mb-4">
                6. Limitation of Liability
              </h3>
              <p className="text-gray-700">
                JNJ Aqua shall not be liable for any indirect, incidental, or
                consequential damages arising from the use of our products or
                services.
              </p>
            </div>

            {/* 7 */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-[#062347] mb-4">
                7. Intellectual Property
              </h3>
              <p className="text-gray-700">
                All content on this website, including text, images, and logos,
                is the property of JNJ Aqua and may not be used without
                permission.
              </p>
            </div>

            {/* 8 */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-[#062347] mb-4">
                8. Policy Updates
              </h3>
              <p className="text-gray-700">
                We reserve the right to update these terms at any time. Changes
                will be effective once posted on this page.
              </p>
            </div>

            {/* 9 Contact */}
            <div className="border-t pt-8">
              <h3 className="text-2xl font-semibold text-[#062347] mb-4">
                9. Contact Us
              </h3>

              <p className="text-gray-700 mb-2">
                For any questions regarding these terms, please contact us:
              </p>

              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>Company:</strong> JNJ Aqua
                </p>

                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:jnjaquadelhi@gmail.com"
                    className="text-blue-600 hover:underline"
                  >
                    jnjaquadelhi@gmail.com
                  </a>
                </p>

                <p>
                  <strong>Phone:</strong>{" "}
                  <a
                    href="tel:+918595776029"
                    className="text-blue-600 hover:underline"
                  >
                    +91 85957 76029
                  </a>{" "}
                  ,{" "}
                  <a
                    href="tel:+919315556737"
                    className="text-blue-600 hover:underline"
                  >
                    +91 93155 56737
                  </a>
                </p>
              </div>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
}