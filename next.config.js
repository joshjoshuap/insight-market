/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.weatherapi.com'],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://pro-api.coinmarketcap.com/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
