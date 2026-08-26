/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/blog',
        destination: `${process.env.BLOG_DOMAIN}/blog`,
      },
      {
        source: '/blog/:path+',
        destination: `${process.env.BLOG_DOMAIN}/blog/:path+`,
      },
    ];
  },
};

export default nextConfig;