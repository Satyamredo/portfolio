/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // Add any external image domains you use
    formats: ['image/avif', 'image/webp'],
    // Disable Next.js image optimization for static export (GitHub Pages doesn't support it)
    unoptimized: true,
  },
  compress: true,
  poweredByHeader: falso,
  // Enable static export for GitHub Pages
  output: 'export',
  // Set basePath to your repository name (e.g., '/your-repo') if not hosting at root
  basePath: '/your-repo', // Replace 'your-repo' with your actual repository name
  // Ensure assets are loaded correctly
  assetPrefix: '/your-repo/', // Replace 'your-repo' with your actual repository name
};

export default nextConfig;