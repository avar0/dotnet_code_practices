"use strict";
function configure(aurelia) {
    aurelia.use
        .defaultBindingLanguage()
        .defaultResources()
        .developmentLogging()
        .rounter()
        .history()
        .eventAggregator();
    aurelia.start().then(function () { return aurelia.setRoot(); });
}
exports.configure = configure;
//# sourceMappingURL=main.js.map