import type { NextConfig } from "next";
import path from "node:path";

const LOADER = path.resolve(__dirname, 'src/visual-edits/component-tagger-loader.js');

const nextConfig: NextConfig = {
  // Enable static HTML export
  output: "export",

  // Images: disable optimization for static export
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },

  // For Next.js to trace files correctly outside this folder
  outputFileTracingRoot: path.resolve(__dirname, '../../'),

  // TypeScript settings
  typescript: {
    ignoreBuildErrors: true,
  },

  // ESLint settings
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Turbopack loader configuration
  turbopack: {
    rules: {
      "*.{jsx,tsx}": {
        loaders: [LOADER]
      }
    }
  }
};

export default nextConfig;
