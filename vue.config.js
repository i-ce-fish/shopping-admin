module.exports = {
  publicPath: "./",
  assetsDir: "./",
  devServer: {
    proxy: {
      "/api": {
        target: "http://shop.cdb99.com:8088/",
        // target: "http://123.207.179.135:5001",
        ws: true,
        changeOrigin: true
      },
      "/uploads": {
        target: "http://localhost:5000/",
        ws: true,
        changeOrigin: true
      }
    }
  }
}
