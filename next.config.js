/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    //appDir: true,
  },
  images: {
    domains: ["images.ctfassets.net"],
  },

  async rewrites() {
    return [
      {
        source: "/resume",
        destination: "/Resume-Wojciech-Wieclawski.pdf",
      },
    ];
  },
};

module.exports = nextConfig;
