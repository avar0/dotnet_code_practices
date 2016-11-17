"use strict";
var gulp = require('gulp');
var changedInPlace = require('gulp-changed-in-place');
var project = require('../aurelia.json');
var aurelia_cli_1 = require('aurelia-cli');
function processMarkup() {
    return gulp.src(project.markupProcessor.source)
        .pipe(changedInPlace({ firstPass: true }))
        .pipe(aurelia_cli_1.build.bundle());
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = processMarkup;
//# sourceMappingURL=process-markup.js.map