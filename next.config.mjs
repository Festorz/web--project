/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dvd6ljcj7w3pj.cloudfront.net",
        port: "",
      },
    ],
  },
};

export default nextConfig;
