/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
      allowFutureImage: true,
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'dummyjson.com',
          port: '',
          // pathname: '/account123/**',
        },
      ],
    },
  },
}

module.exports = nextConfig
