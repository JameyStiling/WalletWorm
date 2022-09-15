/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    tsconfigPath: "./tsconfig.json",
  },
  images: {
    domains: ["lh3.googleusercontent.com", "presalemetadata.mythical.market"],
  },
};

module.exports = nextConfig;
