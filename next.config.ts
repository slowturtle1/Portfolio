import type { NextConfig } from "next";

export const BASE_PATH = '/Portfolio';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: BASE_PATH,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: BASE_PATH },
};

export default nextConfig;
