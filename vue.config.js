const name = 'shopping-admin'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: './',
  assetsDir: './',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://shop.cdb99.com:8088/',
        // target: "http://123.207.179.135:5001",
        ws: true,
        changeOrigin: true
      },
      '/uploads': {
        target: 'http://localhost:5000/',
        ws: true,
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name,
    resolve: {
      // 配置路径别名
      alias: {
        '@': resolve('src')
      }
    }
  },
  //  配置全局scss变量
  css: {
    loaderOptions: {
      sass: {
        data: '@import "~@/styles/variables.scss";'
      }
    }
  }
}

