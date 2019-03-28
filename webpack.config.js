const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PluginLessonsPlugins = require("./plugin-lessons-plugins");

module.exports = {
    entry: "./src",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].chunk.js"
    },
    plugins: [
        new PluginLessonsPlugins.OneBasicPluginWebpackPlugin()
    ].concat([new HtmlWebpackPlugin({
        template: "./assets/index.html",
    })])
};