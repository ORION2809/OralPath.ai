import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  basePath: "/OralPath.ai",
  assetPrefix: "/OralPath.ai",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
