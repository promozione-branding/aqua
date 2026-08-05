import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-80 min-h-screen">

      {/* Top Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.12),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_45%)]" />

        <div className="relative max-w-7xl mx-auto px-6 py-8 lg:py-14">
          <h1 className="mt-6 text-3xl md:text-7xl font-bold leading-tight text-slate-900">
            Privacy Policy
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-600">
            At JNJ Aqua, we value your privacy and are committed to protecting
            your personal information. This policy explains how we collect, use,
            and safeguard your data.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-5">
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-6">
          <div className="bg-white rounded-2xl p-6 md:p-10">

            {/* Intro */}
            <p className="text-gray-700 leading-8 mb-8">
              At <strong className="text-[#062347]">JNJ Aqua</strong>, we are committed to
              protecting your privacy. This Privacy Policy outlines how we
              collect, use, and protect your personal information when you use
              our website or services.
            </p>

            {/* 1 */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-[#062347] mb-4">
                1. Information We Collect
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Name, phone number, and email address.</li>
                <li>Billing and shipping address.</li>
                <li>Order and transaction details.</li>
                <li>Website usage data (cookies, IP address, browser info).</li>
              </ul>
            </div>

            {/* 2 */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-[#062347] mb-4">
                2. How We Use Your Information
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>To process and deliver your orders.</li>
                <li>To communicate order updates and support.</li>
                <li>To improve our website and services.</li>
                <li>To send important notifications or offers (if opted).</li>
              </ul>
            </div>

            {/* 3 */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-[#062347] mb-4">
                3. Data Protection
              </h3>
              <p className="text-gray-700">
                We implement appropriate security measures to protect your
                personal data from unauthorized access, misuse, or disclosure.
              </p>
            </div>

            {/* 4 */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-[#062347] mb-4">
                4. Sharing of Information
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  We do not sell or rent your personal information to third
                  parties.
                </li>
                <li>
                  Information may be shared with trusted service providers
                  (logistics, payment gateways) for order fulfillment.
                </li>
                <li>
                  We may disclose data if required by law or legal authorities.
                </li>
              </ul>
            </div>

            {/* 5 */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-[#062347] mb-4">
                5. Cookies
              </h3>
              <p className="text-gray-700">
                Our website may use cookies to enhance user experience, analyze
                traffic, and improve functionality. You can choose to disable
                cookies through your browser settings.
              </p>
            </div>

            {/* 6 */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-[#062347] mb-4">
                6. Your Rights
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>You can request access to your personal data.</li>
                <li>You can request correction or deletion of your data.</li>
                <li>You can opt-out of marketing communications.</li>
              </ul>
            </div>

            {/* 7 */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-[#062347] mb-4">
                7. Policy Updates
              </h3>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time. Changes will
                be posted on this page with updated dates.
              </p>
            </div>

            {/* 8 Contact */}
            <div className="border-t pt-8">
              <h3 className="text-2xl font-semibold text-[#062347] mb-4">
                8. Contact Us
              </h3>

              <p className="text-gray-700 mb-2">
                If you have any questions regarding this Privacy Policy, please
                contact us:
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