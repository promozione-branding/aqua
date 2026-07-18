import { ShoppingCart, ImageIcon, CreditCard } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#2E8EDB] to-[#39AFE3] py-14">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-4xl font-extrabold text-white md:text-4xl">
         High-Quality RO Cabinets & Spare Parts for Every Need
        </h2>

        <p className="mt-6 text-xl font-semibold text-black">
          Upgrade your RO system with durable, reliable components.
        </p>

        <button className="mt-12 rounded-lg bg-[#49D6E8] px-16 py-5 text-xl font-bold text-white transition duration-300 hover:bg-[#40CDE0]">
          Request Quote
        </button>
      </div>

      {/* Floating Right Icons */}
      
    </section>
  );
}