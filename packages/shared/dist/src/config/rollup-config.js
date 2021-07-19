"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var path_1 = __importDefault(require("path"));
var rollup_plugin_typescript2_1 = __importDefault(require("rollup-plugin-typescript2"));
var plugin_replace_1 = __importDefault(require("@rollup/plugin-replace"));
var plugin_json_1 = __importDefault(require("@rollup/plugin-json"));
var args = require('minimist')(process.argv.slice(2));
var packageOptions = {};
var name = 'index';
var isProduct = true;
var outputConfigs = {
    esm: {
        file: "lib/" + name + ".esm.js",
        format: "es"
    },
    cjs: {
        file: "lib/" + name + ".cjs.js",
        format: "cjs"
    },
    global: {
        file: "lib/" + name + ".global.js",
        format: "iife"
    }
};
var packageFormats = Object.keys(outputConfigs);
var packageConfigs = packageFormats.map(function (format) { return createConfig(format, outputConfigs[format]); });
// 生产环境
if (isProduct) {
    packageFormats.forEach(function (format) {
        if (format === 'cjs') {
            packageConfigs.push(createProductionConfig(format));
        }
        if (/global/.test(format)) {
            packageConfigs.push(createMinifiedConfig(format));
        }
    });
}
exports.default = packageConfigs;
function createConfig(format, output, plugins) {
    if (plugins === void 0) { plugins = []; }
    if (!output) {
        console.log(require('chalk').yellow("invalid format: \"" + format + "\""));
        process.exit(1);
    }
    output.sourcemap = true;
    output.externalLiveBindings = false;
    var isGlobalBuild = /global/.test(format);
    if (isGlobalBuild) {
        output.name = packageOptions.name;
    }
    var tsPlugin = rollup_plugin_typescript2_1.default({
        check: true,
        tsconfig: path_1.default.resolve(__dirname, 'tsconfig.json'),
        cacheRoot: path_1.default.resolve(__dirname, 'node_modules/.rts2_cache'),
        tsconfigOverride: {
            compilerOptions: {
                sourceMap: false,
                declaration: true,
                declarationMap: false
            },
            exclude: ['tests']
        }
    });
    output.globals = {};
    var nodePlugins = format !== 'cjs'
        ? [
            require('@rollup/plugin-node-resolve').nodeResolve({
                preferBuiltins: true
            }),
            require('@rollup/plugin-commonjs')({
                sourceMap: false
            }),
            require('rollup-plugin-node-builtins')(),
            require('rollup-plugin-node-globals')()
        ]
        : [];
    return {
        input: "src/index.ts",
        external: [],
        plugins: __spreadArray(__spreadArray([
            plugin_json_1.default({
                namedExports: false
            }),
            tsPlugin,
            createReplacePlugin()
        ], nodePlugins), plugins),
        output: output,
        onwarn: function (msg, warn) {
            if (!/Circular/.test(msg)) {
                warn(msg);
            }
        },
        treeshake: {
            moduleSideEffects: false
        }
    };
}
function createReplacePlugin() {
    var replacements = {};
    // allow inline overrides like
    //__RUNTIME_COMPILE__=true yarn build runtime-core
    Object.keys(replacements).forEach(function (key) {
        if (key in process.env) {
            replacements[key] = process.env[key];
        }
    });
    return plugin_replace_1.default(replacements);
}
function createProductionConfig(format) {
    return createConfig(format, {
        file: "lib/index." + format + ".prod.js",
        format: outputConfigs[format].format
    });
}
function createMinifiedConfig(format) {
    var terser = require('rollup-plugin-terser').terser;
    return createConfig(format, {
        file: outputConfigs[format].file.replace(/\.js$/, '.prod.js'),
        format: outputConfigs[format].format
    }, [
        terser({
            module: /^esm/.test(format),
            compress: {
                ecma: 2015,
                pure_getters: true
            }
        })
    ]);
}
