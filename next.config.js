/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    remotePatterns : [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '**',
      }
    ]
  },
  output: 'standalone'

}

module.exports = nextConfig