/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3001',
        pathname: '/api/media/file/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3001',
        pathname: '/media/**',
      },
      {
        protocol: 'https',
        hostname: process.env.NEXT_PUBLIC_PAYLOAD_URL?.replace('https://', '') || '',
        pathname: '/api/media/file/**',
      },
      {
        protocol: 'https',
        hostname: process.env.NEXT_PUBLIC_PAYLOAD_URL?.replace('https://', '') || '',
        pathname: '/media/**',
      },
    ],
  },
}

module.exports = nextConfig