module.exports = {
    publicPath: 'https://recipesharingbackend.onrender.com',
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
