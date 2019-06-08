module.exports = {
    publicPath: '/frontend/'

}


// const BundleTracker = require("webpack-bundle-tracker");
// module.exports = {
//     // baseUrl: "http://0.0.0.0:8080/",
//     publicPath: "http://192.168.56.1:8080/",
//     // outputDir: './dist/',
//     outputDir: 'dist',

//     //  devServer: {
//     //      proxy: {
//     //          '/api*': {
//     //              // Forward frontend dev server request for /api to django dev server
//     //              target: 'http://localhost:8000/',
//     //          }
//     //      }
//     //  }

//     chainWebpack: config => {

//         config.optimization
//             .splitChunks(false)

//         config
//             .plugin('BundleTracker')
//             .use(BundleTracker, [{
//                 filename: '../frontend/webpack-stats.json'
//             }])

//         config.resolve.alias
//             .set('__STATIC__', 'static')

//         config.devServer
//             .public('http://192.168.56.1:8080')
//             .host('192.168.56.1')
//             .port(8080)
//             .hotOnly(true)
//             .watchOptions({
//                 poll: 1000
//             })
//             .https(false)
//             .headers({
//                 "Access-Control-Allow-Origin": ["\*"]
//             })
//     }
// };