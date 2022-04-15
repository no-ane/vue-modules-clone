/* eslint-disable */
const IS_DEV = process.env.NODE_ENV === 'development';
const Alias = require('./alias.config');

const baseConfig = {
  configureWebpack: config => {
    config.resolve.alias = Object.assign(
      {},
      Alias.resolve.alias,
      config.resolve.alias
    );
  },
};

// app 配置
const appConfig = {
  chainWebpack: config => {
    // 图片名配置，防止出现图片重名覆盖
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options =>
        Object.assign(options, {
          fallback: {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[hash:8].[ext]',
            },
          },
        })
      );
  },
  // 关闭生产环境source map，提高构建速度
  productionSourceMap: false
};


const config = Object.assign({}, baseConfig, appConfig);
module.exports = config;
