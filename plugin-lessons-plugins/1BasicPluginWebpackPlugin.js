const pluginUtils = require("./plugin-utils");

class BasicPlugin {
    constructor() {

         pluginUtils.logPluginEvent("pluginDidMount", "BasicPlugin");
    }
    apply(compiler) {
    }
}

module.exports = BasicPlugin;