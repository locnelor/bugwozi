const createNextIntlPlugin = require('next-intl/plugin');

const nextConfig = {
  reactStrictMode: false,
};

const withNextIntl = createNextIntlPlugin();

module.exports = withNextIntl(nextConfig);