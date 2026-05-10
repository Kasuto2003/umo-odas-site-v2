/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'umo.centre-odas.org',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'centre-odas.org',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
}
module.exports = nextConfig
