import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  webpack: (config) => {
    config.watchOptions = {
      poll: 1000,
    }

    return config;
  }
};

export default nextConfig;
