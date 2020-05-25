module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/api" : "/",
  outputDir: "dist",
  assetsDir: "assets",
  productionSourceMap: false,
  filenameHashing: false,
  /* 代码保存时进行eslint检测 */
  lintOnSave: true,
  /* webpack-dev-server 相关配置 */
  devServer: {
    /* 自动打开浏览器 */
    open: true,
    /* 设置为0.0.0.0则所有的地址均能访问 */
    port: 8095,
    https: false,
    hotOnly: false
    /* 使用代理 */
    // proxy: {
    //     '/api': {
    //         /* 目标代理服务器地址 */
    //         target: 'http://139.196.228.37:8080/',
    //         /* 允许跨域 */
    //         changeOrigin: true,
    //         pathRewrite: { // 替换，通配/api的替换成/
    //             '^/api': '/'
    //         }
    //     },
    // },
  }
};
