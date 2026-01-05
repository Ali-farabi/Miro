/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
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
        protocol: 'https',
        hostname: 'miro-project-production.up.railway.app', 
        pathname: '/api/media/file/**',
      },
      {
        protocol: 'https',
        hostname: 'miro-project-production.up.railway.app',
        pathname: '/media/**',
      },
    ],
  },
}

module.exports = nextConfig