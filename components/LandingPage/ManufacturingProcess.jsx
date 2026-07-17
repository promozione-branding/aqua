import {
  PencilRuler,
  Hammer,
  Settings2,
  Wrench,
  ShieldCheck,
  PackageCheck,
  ChevronRight,
} from "lucide-react";

const process = [
  {
    id: "01",
    title: "Design & Development",
    icon: PencilRuler,
    color: "from-blue-500 to-blue-700",
  },
  {
    id: "02",
    title: "Mould Manufacturing",
    icon: Hammer,
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: "03",
    title: "Injection Moulding",
    icon: Settings2,
    color: "from-indigo-500 to-blue-700",
  },
  {
    id: "04",
    title: "Assembly",
    icon: Wrench,
    color: "from-sky-500 to-indigo-600",
  },
  {
    id: "05",
    title: "Quality Testing",
    icon: ShieldCheck,
    color: "from-emerald-500 to-blue-700",
  },
  {
    id: "06",
    title: "Packaging & Dispatch",
    icon: PackageCheck,
    color: "from-blue-600 to-indigo-700",
  },
];

export default function ManufacturingProcess() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="uppercase tracking-[4px] text-sm font-semibold text-blue-600">
            Our Manufacturing Process
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            From Design to Delivery
          </h2>

          <div className="w-24 h-1 bg-blue-600 rounded-full mx-auto mt-5"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-1 bg-gray-200"></div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 relative">
            {process.map((step, index) => {
              const Icon = step.icon;

              return (
                <div key={step.id} className="relative text-center group">
                  {/* Arrow */}
                  {index !== process.length - 1 && (
                    <ChevronRight
                      className="hidden lg:block absolute -right-7 top-10 text-blue-500"
                      size={28}
                    />
                  )}

                  {/* Icon */}
                  <div
                    className={`w-24 h-24 rounded-full mx-auto flex items-center justify-center bg-gradient-to-br ${step.color} shadow-lg group-hover:scale-110 transition duration-300`}
                  >
                    <Icon className="text-white" size={34} />
                  </div>

                  {/* Number */}
                  <div className="mt-5 text-blue-600 font-bold text-sm tracking-wider">
                    STEP {step.id}
                  </div>

                  {/* Title */}
                  <h3 className="mt-2 font-semibold text-gray-800 leading-6">
                    {step.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 bg-gradient-to-r from-blue-700 to-blue-900 rounded-3xl text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-blue-500">
            {[
              {
                number: "50,000+",
                label: "Units Manufactured",
              },
              {
                number: "500+",
                label: "Happy Clients",
              },
              {
                number: "100+",
                label: "Product Models",
              },
              {
                number: "25+",
                label: "Years Experience",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="py-10 text-center hover:bg-white/5 transition"
              >
                <h3 className="text-4xl font-bold">{item.number}</h3>
                <p className="mt-2 text-blue-100">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}