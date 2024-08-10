/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        dirs: ['.'],
        ignoreDuringBuilds: true,
      },
      typescript: {
        ignoreBuildErrors: true,
      },
};

export default nextConfig;
