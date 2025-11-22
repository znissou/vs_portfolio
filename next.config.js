// module.exports = {
//   images: {
//     unoptimized: true,
//     domains: [
//       'res.cloudinary.com',
//       'avatars.githubusercontent.com',
//       'imgur.com',
//     ],
//   }
// };

// module.exports = {
//   output: 'export',
//   images: {
//     unoptimized: true
//   }
// }

module.exports = {
  output: 'export'
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;