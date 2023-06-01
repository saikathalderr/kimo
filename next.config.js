/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['storage.googleapis.com'],
  },
  async redirects() {
    return [
      {
        source: '/api',
        destination: 'https://web-dev.dev.kimo.ai/v1/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
