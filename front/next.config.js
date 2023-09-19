/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BACKEND_API: "https://follow.atitude247.com.br",
    SOCKET_API: "https://socketfollow.atitude247.com.br",
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
