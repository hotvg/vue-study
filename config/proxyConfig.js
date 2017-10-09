/**
 * 设置代理参数
 */

module.exports = {
  proxyList: {
    '/api' : {
      target: 'https://api-m.mtime.cn',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    }
  }
}

