import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tvdvzmmvpzfqenwyemem.supabase.co',
      },
    ],
  },
};

export default nextConfig;
