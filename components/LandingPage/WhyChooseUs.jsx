import {
  ShieldCheck,
  Droplets,
  Zap,
  Wrench,
  Palette,
  BadgeCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Food Grade",
    desc: "ABS Material",
  },
  {
    icon: Droplets,
    title: "Leak Proof",
    desc: "Advanced Design",
  },
  {
    icon: Zap,
    title: "Energy",
    desc: "Efficient",
  },
  {
    icon: Wrench,
    title: "Easy",
    desc: "Installation",
  },
  {
    icon: Palette,
    title: "Premium",
    desc: "Modern Designs",
  },
  {
    icon: BadgeCheck,
    title: "Strict",
    desc: "Quality Control",
  },
];

const benefits = [
  "Custom Logo Branding",
  "Premium Packaging",
  "Product Customization",
  "Bulk Manufacturing",
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-blue-700 py-14">

      {/* Background Blur */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-400/20 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}

        <div className="text-center">

          <span className="uppercase tracking-[3px] text-blue-300 font-semibold">
            Why Choose Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Why Buyers Choose Our Products
          </h2>

          <p className="text-blue-100 mt-5 max-w-2xl mx-auto">
            Engineered with premium materials, precision manufacturing
            and modern technology to deliver long-lasting performance.
          </p>
        </div>

        {/* Features */}

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 mt-8">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center hover:-translate-y-2 hover:bg-white/15 transition duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto">

                  <Icon className="text-blue-600" size={30} />

                </div>

                <h4 className="text-white font-semibold mt-5">
                  {item.title}
                </h4>

                <p className="text-blue-100 text-sm mt-1">
                  {item.desc}
                </p>
              </div>
            );
          })}

        </div>

        {/* OEM Banner */}

        <div className="mt-9 rounded-3xl overflow-hidden shadow-2xl">

          <div className="grid lg:grid-cols-2 items-center">

            {/* Left */}

            <div className="p-10 lg:p-8">

              <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm">
                OEM Manufacturing
              </span>

              <h2 className="text-4xl font-bold text-white mt-6 leading-tight">
                Launch Your Own
                <br />
                RO Brand
              </h2>

              <p className="text-blue-100 mt-5 leading-8">
                We manufacture premium RO Cabinets & Spare Parts
                for dealers, distributors, startups and
                e-commerce brands with complete OEM support.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mt-8">

                {benefits.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-white"
                  >
                    <CheckCircle2 className="text-cyan-300" size={20} />

                    {item}
                  </div>
                ))}

              </div>

              <button className="mt-10 bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold flex items-center gap-3 hover:bg-blue-50 transition">

                Start OEM Manufacturing

                <ArrowRight size={18} />

              </button>

            </div>

            {/* Right */}

            <div className="relative flex justify-center items-end h-full py-10">

              {/* Back Product */}

              <img
                src="/2.png"
                className="w-48 lg:w-56 rotate-[-10deg] absolute left-10 bottom-12 drop-shadow-2xl hover:scale-105 transition"
                alt=""
              />

              {/* Center Product */}

              <img
                src="/1.png"
                className="w-56 lg:w-72 relative z-20 drop-shadow-2xl hover:-translate-y-3 transition"
                alt=""
              />

              {/* Right Product */}

              <img
                src="/3.png"
                className="w-48 lg:w-56 rotate-[10deg] absolute right-10 bottom-12 drop-shadow-2xl hover:scale-105 transition"
                alt=""
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}