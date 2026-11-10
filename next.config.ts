import type { NextConfig } from "next";

// Ρυθμίσεις για την εικόνα προφίλ και τις δοκιμές από το τοπικό δίκτυο.
const nextConfig: NextConfig = {
  allowedDevOrigins: ["your-local-ip"],
  images: {
    remotePatterns: [
      new URL(
        "https://res.cloudinary.com/vvu8rq88/image/upload/v1794304237/jumping-spider-minimal-signed.png",
      ),
    ],
  },
};

export default nextConfig;
