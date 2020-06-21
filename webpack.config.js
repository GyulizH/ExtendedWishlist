const path = require("path");
const CopyPlugin= require('copy-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, "/dist"),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
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
                test: /\.css$/,
                exclude: /node_modules/,
                use: ["style-loader”, “css-loader"]
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



