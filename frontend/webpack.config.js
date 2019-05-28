var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
    // other options...
    module: {
        rules: [
            // ... other rules omitted
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    use: 'css-loader',
                    fallback: 'vue-style-loader'
                })
            }
        ]
    },
    plugins: [
        // ... Vue Loader plugin omitted
        new ExtractTextPlugin("style.css")
    ]
}

module.exports = {
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
}