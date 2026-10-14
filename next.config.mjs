/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [{ source: "/fr", destination: "/", permanent: true }];
  },
  async rewrites() {
    return [{ source: "/", destination: "/fr" }];
  },
};

export default nextConfig;
