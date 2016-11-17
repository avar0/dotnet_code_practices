"use strict";
var karma_1 = require('karma');
var aurelia_cli_1 = require('aurelia-cli');
function unit(done) {
    new karma_1.Server({
        configFile: __dirname + '/../../karma.conf.js',
        singleRun: !aurelia_cli_1.CLIOptions.hasFlag('watch')
    }, done).start();
}
exports.unit = unit;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = unit;
//# sourceMappingURL=test.js.map