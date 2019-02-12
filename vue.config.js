module.exports = {
  devServer: {
    proxy: {
      '^/categories': {
        target: 'http://localhost:8080',
        changeOrigin: true
      }
    }
  }
}
