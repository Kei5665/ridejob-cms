/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/media',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/media',
        permanent: true,
      },
      {
        source: '/:path((?!media/).*)',
        destination: '/media/:path',
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.microcms-assets.io',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
