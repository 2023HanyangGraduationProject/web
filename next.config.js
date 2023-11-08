/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { dev, isServer, webpack, nextRuntime }) => {
        config.module.rules.push({
          test: /\.node$/,
          use: [
            {
              loader: "nextjs-node-loader",
              // options: {
              //   flags: os.constants.dlopen.RTLD_NOW,
              //   outputPath: config.output.path
              // }
            },
          ],
        });
        return config;
    },
    async headers() {
      return [
        {
            // matching all API routes
            source: "/api/:path*",
            // source: "*",
            headers: [
                { key: "Access-Control-Allow-Credentials", value: "true" },
                { key: "Access-Control-Allow-Origin", value: "https://rpc.sepolia.org" }, // replace this your actual origin
                { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
            ]
        }
      ]
    },
}

module.exports = nextConfig


// module.exports = {
//     webpack: (config, { dev, isServer, webpack, nextRuntime }) => {
//       config.module.rules.push({
//         test: /\.node$/,
//         use: [
//           {
//             loader: "nextjs-node-loader",
//             // options: {
//             //   flags: os.constants.dlopen.RTLD_NOW,
//             //   outputPath: config.output.path
//             // }
//           },
//         ],
//       });
//       return config;
//     },
//   };