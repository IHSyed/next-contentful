/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  env : {
    CONTENTFUL_SPACE_ID: "m637ood6lzub",
    CONTENTFUL_ENVIRONMENT: "master",
  }
}

module.exports = nextConfig
