import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  compiler: {
    styledComponents: true,
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      },
   
    ]
  }
};

export default nextConfig;