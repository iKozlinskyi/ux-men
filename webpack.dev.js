const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: "development",
    module: {
        rules: [
            {
                test: /(\.css|\.scss)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, "src/static/pages/landing/index.html")
        }),
        new HtmlWebpackPlugin({
            filename: "about.html",
            template: path.resolve(__dirname, "src/static/pages/about/about.html")
        })
    ],
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        compress: true,
        hot: true,
        port: 3000,
        publicPath: "/",
        historyApiFallback: {
            rewrites: [
                { from: /\/about/, to: '/about.html'}
            ]
        }
    }
});