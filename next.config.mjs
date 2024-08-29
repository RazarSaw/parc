/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/parc",
  output: "export",
  reactStrictMode: true,
  images: {
    domains: ["www.hamqsl.com"],
  },
};

export default nextConfig;