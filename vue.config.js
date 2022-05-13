module.exports = {
  lintOnSave: false,
  configureWebpack: {
    devServer: {
      open: false,
      proxy: {
        "/api": {
          target: "http://192.168.100.114:8085/",
          // target: 'http://wangge.yunbown.com/api',
          pathRewrite: { "^/api": "" },
          changeOrigin: true, // target是域名的话，需要这个参数，
          secure: false, // 设置支持https协议的代理
        },
      },
    },
    externals: {
      AMap: "AMap",
      AMapUI: "AMapUI",
    },
  },
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  outputDir: "dist",
  assetsDir: "static",
};
