import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/depqttzlt/**',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/user-attachments/assets/**',
      },
    ],
  },
  // Serve self-hosted certificate PDFs for inline viewing in a new tab
  // (Content-Disposition: inline) rather than forcing a download, and stop
  // browsers MIME-sniffing them into anything other than application/pdf.
  async headers() {
    return [
      {
        source: "/certificates/:path*",
        headers: [
          { key: "Content-Disposition", value: "inline" },
          { key: "X-Content-Type-Options", value: "nosniff" },
        ],
      },
    ];
  },
};

export default nextConfig;
