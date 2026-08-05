/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-5d7e0ccbf7ae4e70ab58aa8c92d44dec.r2.dev",
      },
    ],
    domains: ["cdn.sanity.io"],
  },
  async headers() {
    return [
      {
        // Prevent Vercel Edge CDN from caching product pages on the custom domain
        source: "/products/:path*",
        headers: [
          { key: "Cache-Control", value: "no-store" },
        ],
      },
    ];
  },
};

export default nextConfig;
