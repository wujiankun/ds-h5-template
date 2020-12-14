/* eslint-disable indent */
/**
 * Created by
 */
const packageObj = require('./package.json')
const proxyPath = 'http://***.***.**.com/'
const cmsConfig = require('./cms.config.js')
module.exports = {
    // 选项...
    chainWebpack: config => {
        config.plugin('html').tap(args => {
            args[0].minify = args[0].minify || {}
            args[0].minify.removeComments = false
            args[0].minify.collapseWhitespace = false
            args[0].filename = 'index.shtml'
            args[0].cmsId = packageObj.cmsId
            args[0].channel = packageObj.channel
            args[0].title = packageObj.name
            args[0].description = packageObj.description
            args[0].keywords = 'keywords'
            return args
        })
    },
    publicPath: cmsConfig.output.cdnPath + cmsConfig.upload.path,
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
