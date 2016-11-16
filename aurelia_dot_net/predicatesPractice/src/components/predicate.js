"use strict";
var Predicate = (function () {
    function Predicate() {
    }
    Predicate.prototype.selectProperty = function (property) {
        this.selectedProperty = property;
    };
    Predicate.prototype.selectCondition = function (condition) {
        this.selectedCondition = condition;
    };
    Predicate.prototype.addFilter = function (newFilter) {
        // this.filters.push(newFilter);
    };
    Predicate.prototype.removeFilter = function (newFilter) {
        // var index = this.filters.indexOf(newFilter, 0);
        // if (index > -1) {
        //    this.filters.splice(index, 1);
        // }
    };
    /*Lifecycle*/
    Predicate.prototype.attached = function () {
        var x = $(".data-field-select");
        $(".data-field-select").select2();
    };
    return Predicate;
}());
exports.Predicate = Predicate;
//# sourceMappingURL=predicate.js.map