import { ShoppingCart, ImageIcon, CreditCard } from "lucide-react";
import Image from "next/image";

export default function CTA() {
  return (

   <section className="relative overflow-hidden bg-gradient-to-br from-[#1D7FD8] via-[#2E8EDB] to-[#3DB7E6] py-14">
      <Image
    src="/water.png"
    alt="Water"
    fill
    className="absolute bottom-0 left-0 object-cover opacity-20 pointer-events-none"
  />
  {/* Background Decorations */}
  <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>
  <div className="absolute -bottom-24 -right-20 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl"></div>

  {/* Pattern */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[length:28px_28px]" />
  </div>

  <div className="relative mx-auto max-w-5xl px-6">
    {/* <div className="rounded-3xl border border-white/20 bg-white/10 p-12 backdrop-blur-lg text-center "> */}

      {/* <span className="inline-block rounded-full bg-white/20 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-white">
        Premium RO Components
      </span> */}

      <h2 className="mt-6 text-4xl text-center font-extrabold leading-tight text-white md:text-5xl">
        High-Quality RO Cabinets
        <br />
        <span className="text-cyan-100">& Spare Parts for Every Need</span>
      </h2>

      <p className="mx-auto mt-6 text-center text-lg leading-8 text-blue-50 md:text-xl">
        Upgrade your RO system with durable cabinets, filters, membranes,
        fittings, pumps, and premium spare parts designed for long-lasting
        performance.
      </p>

      <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
        <button className="rounded-xl bg-white px-10 py-4 text-lg font-bold text-[#1D7FD8] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#40CDE0] hover:text-white">
          Request Quote
        </button>

        <button className="rounded-xl border-2 border-white px-10 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#1D7FD8]">
          View Products
        </button>
      {/* </div> */}
    </div>
  </div>
</section>
  );
}