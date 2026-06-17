/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: '*.r2.dev',
      },
      {
        protocol: 'https',
        hostname: '*.r2.cloudflarestorage.com',
      },
    ],
  },

  // Proxy legacy /uploads/* paths to the proposal system so old local images
  // load correctly in the client portal (which has no public/uploads folder).
  // New uploads go to R2 and use absolute URLs, so they bypass this entirely.
  async rewrites() {
    return [
      {
        source: '/uploads/:path*',
        destination: `${process.env.NEXT_PUBLIC_PROPOSALS_DOMAIN}/uploads/:path*`,
      },
    ]
  },
}

export default nextConfig
