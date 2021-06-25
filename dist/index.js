"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.whereIsHere = exports.whereIsCallFunction = void 0;
var stack_utils_1 = __importDefault(require("stack-utils"));
var utils = new stack_utils_1.default({ cwd: process ? process.cwd() : ".", internals: stack_utils_1.default.nodeInternals() });
function whereIsCallFunction() {
    var cleaned = utils.clean((new Error()).stack);
    var location = utils.parseLine(cleaned.split("\n")[2]);
    if (!location)
        return null;
    return {
        line: location.line,
        column: location.column,
        file: location.file
    };
}
exports.whereIsCallFunction = whereIsCallFunction;
function whereIsHere() {
    var cleaned = utils.clean((new Error()).stack);
    var location = utils.parseLine(cleaned.split("\n")[1]);
    if (!location)
        return null;
    return {
        line: location.line,
        column: location.column,
        file: location.file
    };
}
exports.whereIsHere = whereIsHere;
//# sourceMappingURL=index.js.map