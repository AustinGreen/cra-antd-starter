const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const WebpackBar = require('webpackbar');
const CracoAntDesignPlugin = require('craco-antd');
const path = require('path');

// Don't open the browser during development
process.env.BROWSER = 'none';

module.exports = {
  webpack: {
    alias: { '@ant-design/icons/lib/dist$': path.resolve(__dirname, './src/icons.js') },
    plugins: [
      new WebpackBar({ profile: true }),
      ...(process.env.NODE_ENV === 'production' ? [new BundleAnalyzerPlugin({ openAnalyzer: true })] : []),
    ],
  },
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: { customizeThemeLessPath: path.join(__dirname, './antd.customize.less') },
    },
  ],
};
