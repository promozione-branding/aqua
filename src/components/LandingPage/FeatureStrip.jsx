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
    <section className="bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-y md:divide-y-0 lg:divide-x divide-gray-200">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="flex items-center justify-center gap-3 py-4 sm:py-6 border-gray-100"
              >
                <div className="flex-shrink-0">
                  <Icon
                    size={30}
                    strokeWidth={1.8}
                    className="text-[#3D67B1] sm:w-[34px] sm:h-[34px]"
                  />
                </div>

                <div>
                  <h3 className="text-[19px] font-bold text-[#1F2937] leading-none">
                    {item.title}
                  </h3>

                  <p className="text-[14px] text-gray-500 leading-tight mt-1">
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