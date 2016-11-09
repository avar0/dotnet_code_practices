"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var aurelia_framework_1 = require('aurelia-framework');
var dependency_test_1 = require('./dependency-test');
var App = (function () {
    function App(header, content, dep) {
        this.header = header;
        this.content = content;
        this.message = "Welcome to Aurelia";
        this.header = "Welcome";
        this.content = "Aurelia";
        console.log(dependency_test_1.DependencyTest);
    }
    App.prototype.created = function (owningView, myView) {
        console.log("created");
        console.log(owningView);
        console.log(myView);
        console.log("---------------------");
    };
    App.prototype.bind = function (bindingContext, overrideContext) {
        console.log("bind");
        console.log(bindingContext);
        console.log(overrideContext);
        console.log("---------------------");
    };
    App.prototype.attached = function (argument) {
        console.log("Attached");
        console.log(argument);
        console.log("---------------------");
    };
    App.prototype.updateContent = function () {
        this.header = "New value";
        this.content = "New value";
    };
    App = __decorate([
        aurelia_framework_1.inject(dependency_test_1.DependencyTest)
    ], App);
    return App;
}());
exports.App = App;
//# sourceMappingURL=app.js.map