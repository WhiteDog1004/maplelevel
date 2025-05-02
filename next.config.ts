import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    deviceSizes: [320],
    imageSizes: [320],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'maplestory.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
