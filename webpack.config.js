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
        new PluginLessonsPlugins.OneBasicPluginWebpackPlugin({message: "Plugin 1"}),
        new PluginLessonsPlugins.TwoCompilerPluginWebpackPlugin({message: "Plugin 2"})
    ].concat([new HtmlWebpackPlugin({
        template: "./assets/index.html",
    })])
};