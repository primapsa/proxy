/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
  async rewrites() {
    return [
      {
        source: '/prx/:path*',
        destination: `${process.env.NEXT_URL}/:path*`,
        proxySetHeader: {
          'Authorization' : `Bearer ${process.env.NEXT_API_KEY}`
        }
      },
      {
        source: '/img/:path*',
        destination: `${process.env.NEXT_URL_IMG}/:path*`,
      },
    ];
  },

};

export default nextConfig;
