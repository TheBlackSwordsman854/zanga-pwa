const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
    plugins: [
        new HtmlWebpackPlugin({
          title: "zanga",
          template: path.resolve(__dirname, "../index.html"),
        }),
    ]
}