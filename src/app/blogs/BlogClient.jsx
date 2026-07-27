"use client"; 
import React, { useEffect, useState } from 'react'
import Link from "next/link";
import Image from "next/image";
import { client } from "@/lib/sanity";


async function getBlogs() {
  return client.fetch(
    `*[_type == "blog"] | order(date desc){
      title,
      slug,
      date,
      excerpt,
      "imageUrl": image.asset->url
    }`
  );
}

export default function BlogClient() {

      const [blogs, setBlogs] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6); // ✅ initially show 6 blogs

  useEffect(() => {
    async function fetchBlogs() {
      const data = await getBlogs();
      setBlogs(data);
    }
    fetchBlogs();
  }, []);
  return (
    <>
     <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.12),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_45%)]" />

        <div className="relative max-w-7xl mx-auto px-6 py-8 md::py-14">
          <span className="inline-block rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
            Our Blogs
          </span>

          <h1 className="mt-6 text-3xl md:text-6xl font-bold leading-tight text-slate-900">
            Our Blogs 
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-600">
            From durable RO cabinets to premium spare parts, we deliver reliable
            products designed for long-lasting performance.
          </p>
        </div>
      </section>

          <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.slice(0, visibleCount).map((b) => (
            <article
              key={b.slug?.current || b.title}
              className="bg-white border rounded-lg shadow"
            >
              {b.imageUrl && (
                <Image
                  src={b.imageUrl}
                  alt={b.title}
                  width={1200}
                  height={600}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              )}
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{b.title}</h2>
                <p className="text-sm text-gray-500 mb-3">
                  {b.date
                    ? new Date(b.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    : "No date"}
                </p>

                <p className="text-gray-700 text-sm">{b.excerpt}</p>
                <Link
                  href={`/blogs/${b.slug.current}`}
                  className="text-blue-600 font-medium hover:underline mt-3 block"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* ✅ Load More Button */}
        {visibleCount < blogs.length && (
          <div className="text-center mt-10">
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)} // load +6 blogs each click
              className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 transition"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </>
  )
}
