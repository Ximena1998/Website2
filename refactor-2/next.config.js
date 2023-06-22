/** @type {import('next').NextConfig} */
const { ProvidePlugin } = require('webpack');

module.exports = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  webpack: (config) => {
    config.plugins.push(
      new ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
      })
    );

    return config;
  },
};

