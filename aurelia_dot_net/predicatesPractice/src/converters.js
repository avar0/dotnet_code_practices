"use strict";
var numeral_1_5_3_1 = require('jspm_packages/npm/numeral@1.5.3');
var DateFormatValueConverter = (function () {
    function DateFormatValueConverter() {
        var x = new Date();
        console.log(x);
        console.log(numeral_1_5_3_1.default(x).format('D/M/YYYY'));
    }
    DateFormatValueConverter.prototype.toView = function (value) {
        //return moment(value).format('dddd');
    };
    return DateFormatValueConverter;
}());
exports.DateFormatValueConverter = DateFormatValueConverter;
var CurrencyFormatValueConverter = (function () {
    function CurrencyFormatValueConverter() {
        // console.log(numeral(val).format("($0,0.00)"));
    }
    CurrencyFormatValueConverter.prototype.toView = function (val) {
    };
    return CurrencyFormatValueConverter;
}());
exports.CurrencyFormatValueConverter = CurrencyFormatValueConverter;
//# sourceMappingURL=converters.js.map