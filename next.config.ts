import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co", // Specify the domain
        pathname: "/**", // Allow all paths under the domain
      },
    ],
  },
};

export default nextConfig;
