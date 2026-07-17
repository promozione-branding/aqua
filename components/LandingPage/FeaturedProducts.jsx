import { ArrowRight } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Aqua Smart Cabinet",
    storage: "12L",
    material: "ABS Food Grade",
    image: "/8.png",
  },
  {
    id: 2,
    name: "Crystal Series Cabinet",
    storage: "10L",
    material: "ABS Food Grade",
    image: "/7.png",
  },
  {
    id: 3,
    name: "Premium Copper RO",
    storage: "12L",
    material: "RO + UV + UF",
    image: "/2.png",
  },
  {
    id: 4,
    name: "Elite Water Purifier",
    storage: "10L",
    material: "RO + UV",
    image: "/5.png",
  },
  {
    id: 5,
    name: "LED Display Cabinet",
    storage: "12L",
    material: "ABS",
    image: "/4.png",
  },
  {
    id: 6,
    name: "Commercial RO Cabinet",
    storage: "18L",
    material: "ABS Food Grade",
    image: "/3.png",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-1">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-blue-600 font-semibold uppercase tracking-[3px] text-sm">
            Featured Products
          </span>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900">
            Our Best Selling Products
          </h2>

          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-5"></div>
        </div>

        {/* Products */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group"
            >
              {/* Image */}
              <div className="h-64 flex items-center justify-center bg-gray-50 p-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-2">
                <h3 className="font-bold text-gray-900 text-sm mb-3 leading-6">
                  {item.name}
                </h3>

                <div className="space-y-1 text-sm text-gray-600">
                  <p>
                    <span className="font-semibold">Storage:</span>{" "}
                    {item.storage}
                  </p>

                  <p>
                    <span className="font-semibold">Material:</span>{" "}
                    {item.material}
                  </p>
                </div>

                <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3 font-semibold transition flex items-center justify-center gap-2">
                  Get Quote
                  <ArrowRight size={17} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-14">
          <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}