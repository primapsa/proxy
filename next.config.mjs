/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/prx/:path*',
        destination: `${process.env.NEXT_URL}/:path*`,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/prx/:path*',
        headers: [
          {
            key: 'Authorization',
            value: `Bearer ${process.env.NEXT_API_KEY}`,
          },
        ],
      },
    ];
  },
};

export default nextConfig;
