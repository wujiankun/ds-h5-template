/**
 * Created by 
 */
const proxyPath = 'http://***.***.**.com/';
module.exports = {
    // 选项...
    publicPath: '/wxpay/',
    // 设置代理
    devServer: {
        proxy: {
            '/api': {
                target: proxyPath,
                changeOrigin: true,
                pathRequiresRewrite: {
                    "^/api": "/api"
                }
            }
        }
    }
}
