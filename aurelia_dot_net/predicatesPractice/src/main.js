"use strict";
function configure(aurelia) {
    aurelia.use.basicConfiguration();
    aurelia.start().then(function () { return aurelia.setRoot(); });
}
exports.configure = configure;
//# sourceMappingURL=main.js.map