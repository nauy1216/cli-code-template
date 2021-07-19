"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.info = void 0;
function info() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log('ergo-shared ---->');
    // eslint-disable-next-line no-console
    console.log.apply(console, args);
}
exports.info = info;
