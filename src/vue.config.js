
module.exports = {
    configureWebpack: {
        devServer: {
            proxy: {
                '/api': {
                    target: 'http://192.168.1.30:9999',
                    ws: true,
                    changeOrigin: true
                }
            }
        }
    }
}