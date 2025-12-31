/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
      // Specific domains that were causing issues
      {
        protocol: "https",
        hostname: "t3.ftcdn.net",
      },
      {
        protocol: "https",
        hostname: "media.gettyimages.com",
      },
      {
        protocol: "https",
        hostname: "skinandcancercenterofarizona.com",
      },
      {
        protocol: "https",
        hostname: "kimballhealth.org",
      },
      {
        protocol: "https",
        hostname: "uph-p-001-delivery.sitecorecontenthub.cloud",
      },
      {
        protocol: "https",
        hostname: "cdn.create.vista.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
