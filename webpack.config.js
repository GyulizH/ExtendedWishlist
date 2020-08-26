const path = require("path");
const CopyPlugin= require('copy-webpack-plugin')

module.exports = {
    entry: {
       modal: './src/index.js',
       wishlist:'./src/wishlist.js'
    },
    output: {
        path: path.join(__dirname, "/dist"),
        filename: '[name].bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool: "eval-source-map",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader","sass-loader"]
            },
        ]
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: 'src/manifest.json',
                }
            ]
        })
    ]
};



