import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/products/ss-wire-mesh-cartridge',
        destination: '/products/stainless-steel-wire-mesh-filter-cartridge',
        permanent: true,
      },
      {
        source: '/products/ss-sintered-powder-cartridge',
        destination: '/products/ss-sintered-filter-cartridge-manufacturer',
        permanent: true,
      },
      {
        source: '/products/storage-tank-supplier',
        destination: '/products/liquid-storage-tank-supplier-india',
        permanent: true,
      },
      {
        source: '/products/ss-pendants',
        destination: '/products/stainless-steel-pendant-manufacturer',
        permanent: true,
      },
      {
        source: '/products/pleated-strainer-manufacturer',
        destination: '/products/pleated-filter-element',
        permanent: true,
      },
      {
        source: '/products/conical-strainer-manufacturer',
        destination: '/products/ss-conical-strainer-manufacturer',
        permanent: true,
      },
      {
        source: '/products/basket-strainer-manufacturer',
        destination: '/products/stainless-steel-basket-strainer-manufacturer',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
