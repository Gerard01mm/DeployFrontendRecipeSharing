module.exports = {
    publicPath: 'https://recipesharingfrontend.onrender.com',
    //outputDir: '../static/dist',
    //indexPath: '../../templates/_base_vue.html',

    configureWebpack: {
        devServer: {
            devMiddleware: {
                writeToDisk: true
            },
            proxy: "https://recipesharingfrontend.onrender.com"
        }
    }
}