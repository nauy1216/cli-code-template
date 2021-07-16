"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = __importDefault(require("commander"));
var create_1 = __importDefault(require("./command/create"));
var build_1 = __importDefault(require("./command/build"));
var dev_1 = __importDefault(require("./command/dev"));
function start() {
    commander_1.default
        .command('create <app-name>')
        .description('根据项目模版创建新的项目')
        .action(function (name, cmd) {
        create_1.default(name, {});
    });
    commander_1.default
        .command('dev <frame>')
        .description('启动开发服务，<frame>框架类型[react|vue]')
        .action(function (frame, cmd) {
        dev_1.default(frame);
    });
    commander_1.default
        .command('build <entry>')
        .description('build ')
        .action(function (entry, cmd) {
        build_1.default(entry);
    });
    commander_1.default
        .command('init:eslint')
        .description('init:eslint ')
        .action(function (entry, cmd) {
        build_1.default(entry);
    });
    commander_1.default.parse(process.argv);
}
exports.default = start;
