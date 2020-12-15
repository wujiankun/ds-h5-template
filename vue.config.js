/**
 * Created by
 */
const packageObj = require('./package.json')
const proxyPath = 'http://shiyongt.163.com/'
const cmsConfig = require('./cms.config.js')
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

module.exports = {
  // 选项...
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].minify = args[0].minify || {}
      args[0].minify.removeComments = false
      args[0].minify.collapseWhitespace = false
      args[0].filename = process.env.NODE_ENV === 'production' ? 'index.shtml' : 'index.html'
      args[0].cmsId = packageObj.cmsId
      args[0].channel = packageObj.channel
      args[0].title = packageObj.title
      args[0].description = packageObj.description
      args[0].keywords = 'keywords'
      return args
    })
  },
  publicPath: process.env.NODE_ENV === 'production' ? cmsConfig.output.cdnPath + cmsConfig.upload.path : '/',

  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 75,
            propList: ['*']
          })
        ]
      }
    }
  },

  // 设置代理
  devServer: {
    proxy: {
      '/api': {
        target: proxyPath,
        changeOrigin: true,
        pathRequiresRewrite: {
          '^/api': '/api'
        }
      }
    }
  }
}
