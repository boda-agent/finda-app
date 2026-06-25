import type { NextConfig } from "next";

const REPO_NAME = "finda-app";

const nextConfig: NextConfig = {
  output: "export",
  basePath: `/${REPO_NAME}`,
  assetPrefix: `/${REPO_NAME}`,
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
