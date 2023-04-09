const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const { DefinePlugin } = require("webpack");

module.exports = {
    entry: {
        main: path.resolve(__dirname, "../src/main.js"),
    },
    devServer: {
        static: path.resolve(__dirname, "../dist"),
    },
    output: {
        clean: true,
        path: path.resolve(__dirname, "../dist"),
    },
    module: {
        rules: [
            {
                test: /\.vue$/i,
                include: path.resolve(__dirname, "../src"),
                loader: "vue-loader",
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: "zanga",
          template: path.resolve(__dirname, "../index.html"),
        }),
        new VueLoaderPlugin(),
        new DefinePlugin({
            __VUE_PROD_DEVTOOLS__: false,
            __VUE_OPTIONS_API__: false,
        }),
    ]
}