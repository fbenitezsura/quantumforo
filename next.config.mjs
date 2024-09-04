/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        dirs: ['.'],
        ignoreDuringBuilds: true,
      },
      typescript: {
        ignoreBuildErrors: false,
      },
};

export default nextConfig;
