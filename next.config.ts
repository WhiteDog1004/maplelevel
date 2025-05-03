import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
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
