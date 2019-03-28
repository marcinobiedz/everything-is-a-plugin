const pluginUtils = require("./plugin-utils");
const chalk = require("chalk");

class BasicPlugin {
    constructor() {

        pluginUtils.logPluginEvent("pluginDidMount", "BasicPlugin");
    }
    apply(compiler) {

        compiler.plugin("run", (compiler, callback) => {
            const pinkMessage = chalk.magenta("\n\nHello World\n\n");
            console.log(pinkMessage);

            callback();
        });
        compiler.plugin("watch-run", (compiler, callback) => {
            const pinkMessage = chalk.magenta("\n\nHello World\n\n");
            console.log(pinkMessage);

            callback();
        });

    }
}

module.exports = BasicPlugin;