"use strict";
var environment_1 = require('./environment');
Promise.config({
    longStackTraces: environment_1.default.debug,
    warnings: {
        wForgottenReturn: false
    }
});
function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .feature('resources');
    if (environment_1.default.debug) {
        aurelia.use.developmentLogging();
    }
    if (environment_1.default.testing) {
        aurelia.use.plugin('aurelia-testing');
    }
    aurelia.start().then(function () { return aurelia.setRoot(); });
}
exports.configure = configure;
//# sourceMappingURL=main.js.map