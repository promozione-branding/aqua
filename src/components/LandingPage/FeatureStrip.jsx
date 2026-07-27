"use client";

import {
  ShieldCheck,
  MapPinned,
  BadgeCheck,
  Package,
  Users,
  Award,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "15+",
    subtitle: "Years Experience",
  },
  {
    icon: MapPinned,
    title: "PAN India",
    subtitle: "Supply",
  },
  {
    icon: BadgeCheck,
    title: "OEM & Private",
    subtitle: "Label Solutions",
  },
  {
    icon: Package,
    title: "Bulk Orders",
    subtitle: "Available",
  },
  {
    icon: Users,
    title: "500+",
    subtitle: "Dealers Network",
  },
  {
    icon: Award,
    title: "ISO Certified",
    subtitle: "Manufacturing",
  },
];

export default function FeatureStrip() {
  return (
    <section className="bg-white py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="flex items-center gap-3 p-3.5 bg-slate-50/70 hover:bg-blue-50/50 rounded-2xl border border-slate-100 hover:border-blue-100/50 transition-all duration-300 hover:shadow-sm"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-[#3D67B1] shadow-sm">
                  <Icon
                    size={22}
                    strokeWidth={2}
                    className="w-5.5 h-5.5"
                  />
                </div>

                <div>
                  <h3 className="text-[16px]  font-extrabold text-slate-800 leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-[11px] sm:text-[12px] text-slate-500 leading-tight mt-0.5 font-medium">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}