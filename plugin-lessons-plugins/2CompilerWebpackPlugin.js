
const pluginUtils = require("./plugin-utils");

class CompilerWebpackPlugin {
    constructor({message}) {
        this.message = message;
    }

    apply(compiler) {
        /**
         * @param {Compiler} compiler - The Compiler Instance (self)
         * @param {Function} callback - callback which signals the hook is finished and that webpack can continue to next compilation step ()
         * @description "before-run" - Runs before the compiler begins any compilation process.
         *
         */
        compiler.plugin("before-run", (compiler, callback) => {
            pluginUtils.logPluginEvent("compiler:before-run", "CompilerWebpackPlugin", "bgMagenta");
            callback();
        });

        /**
         * @param {String} fileName - Name of the file that changed and caused the event rebuild
         * @param {Number} changeTime - A number representation of the timestamp for when the file (in question) changed
         * @description "invalid" - This event fires when in WATCH mode when a file has changed. Passing the file name and time it changed.
         * This even will execute before run-watch or other compiler hooks. Useful for a variety of things. Event logging, tracing, etc or executing something essentially
         * before anything else happens.
         *
         */
        compiler.plugin("invalid", (fileName, changeTime) => {
            pluginUtils.logPluginEvent(`compiler:invalid:fileName-${fileName}:changeTime-${changeTime}\n The file: ${fileName} triggered a rebuild at change time ${changeTime}`, "CompilerWebpackPlugin", "bgRed");
        });

        /**
         * @param {Compiler} compiler - The Compiler Instance (self)
         * @param {Function} callback - callback which signals the hook is finished and that webpack can continue to next compilation step ()
         * @description ["run", "run-watch"] - This plugin is an async "before" hook for the compiler running. You use "run" for single builds,
         * and you use "run-watch" for --watch mode builds (dev-server also).
         */
        compiler.plugin(["run", "watch-run"], (compiler, callback) => {
            pluginUtils.logPluginEvent(`${this.message}`, "CompilerWebpackPlugin");
            callback();
        });

        /**
         * @param {Error} error - The error Object<Error> that gets emitted with the "failed" event.
         * @description "failed" - This error occurs when a build has failed. An error is provided to emit or read details.
         * Great for all sorts of diagnostics, reported or custom error hooking in your own plugin.
         */
        compiler.plugin("failed", (error) => {
            pluginUtils.logPluginEvent("compiler:failed","CompilerWebpackPlugin", "bgRed");
        });

        /**
         * @param {Compiler} compilation - The Compilation Instance (contains dependency graph information, etc)
         * @param {Function} callback - callback which signals the hook is finished and that webpack can continue to next step().
         * @description "emit" - This event emits just before webpack is about to emit assets to the output.path directory location.
         * This is one of the last moments you can add custom generated assets inside of `compilation.assets` (an object with key value pairs of filename:RawSource)
         */
        compiler.plugin("emit", (compilation, callback) => {
            pluginUtils.logPluginEvent("compiler:emit", "CompilerWebpackPlugin", "bgWhite", "black", "black");

            callback();
        })

        compiler.plugin("done", (stats/*: Stats*/) => {
            const moduleString = stats.toJson().modules.map(module => module.identifier).join(`\n`);

            pluginUtils.logPluginEvent(`compiler:done\n${moduleString}`, "CompilerWebpackPlugin", "bgGreen");
        });
    }
}


module.exports = CompilerWebpackPlugin;