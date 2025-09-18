import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

// GitHub Pages serves from a subdirectory for project repos
// Only add basePath if your repo isn't named username.github.io
const isGithubActions = process.env.GITHUB_ACTIONS || false;

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY?.replace(/.*?\//, '') || '';
  nextConfig.basePath = `/${repo}`;
  nextConfig.assetPrefix = `/${repo}`;
}

export default nextConfig;