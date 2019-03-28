const pluginUtils = require("./plugin-utils");

class BasicPlugin {
    constructor({message}) {
        this.message = message;
    }
    apply(compiler) {
        compiler.plugin(["run", "watch-run"], (compiler, callback) => {
            pluginUtils.logPluginEvent(`${this.message}`, "BasicPlugin");
            callback();
        });
    }
}

module.exports = BasicPlugin;