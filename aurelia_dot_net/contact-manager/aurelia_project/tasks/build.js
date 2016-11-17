"use strict";
var gulp = require('gulp');
var transpile_1 = require('./transpile');
var process_markup_1 = require('./process-markup');
var process_css_1 = require('./process-css');
var aurelia_cli_1 = require('aurelia-cli');
var project = require('../aurelia.json');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = gulp.series(readProjectConfiguration, gulp.parallel(transpile_1.default, process_markup_1.default, process_css_1.default), writeBundles);
function readProjectConfiguration() {
    return aurelia_cli_1.build.src(project);
}
function writeBundles() {
    return aurelia_cli_1.build.dest();
}
//# sourceMappingURL=build.js.map