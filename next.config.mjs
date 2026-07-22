/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-5d7e0ccbf7ae4e70ab58aa8c92d44dec.r2.dev",
      },
    ],
  },
};

export default nextConfig;
