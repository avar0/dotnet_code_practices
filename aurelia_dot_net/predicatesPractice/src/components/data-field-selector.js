"use strict";
var DataFieldSelector = (function () {
    function DataFieldSelector() {
        // this.dataFieldOptions = {
        //    recentOptions: [
        //       {
        //          fieldName: "option1"
        //       },
        //       {
        //          fieldName: "option2"
        //       }
        //    ],
        //    allOptions: [
        //       {
        //          fieldName: "option1"
        //       },
        //       {
        //          fieldName: "option2"
        //       },
        //       {
        //          fieldName: "option3"
        //       },
        //       {
        //          fieldName: "option4"
        //       }
        //    ]
        // }
    }
    DataFieldSelector.prototype.getRecentOptions = function () {
        return this.dataFieldOptions.recentOptions;
    };
    DataFieldSelector.prototype.getAllOptions = function () {
        return this.dataFieldOptions.allOptions;
    };
    /*life cycle*/
    DataFieldSelector.prototype.attached = function () {
        $(".data-field-select").select2();
    };
    return DataFieldSelector;
}());
exports.DataFieldSelector = DataFieldSelector;
//# sourceMappingURL=data-field-selector.js.map