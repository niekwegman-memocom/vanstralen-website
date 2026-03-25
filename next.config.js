const { withPayload } = require('@payloadcms/next/withPayload')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'primary.jwwb.nl',
      },
    ],
  },
}

module.exports = withPayload(nextConfig)
