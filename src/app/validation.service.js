"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ValidationService = (function () {
    function ValidationService() {
    }
    //Checks if a value is between a certain min and max
    ValidationService.NumericRangeValidator = function (min, max) {
        return function (control) {
            var val = control.value;
            if (val === null || control.value === "") {
                return null;
            }
            else if (!isNaN(min) && !isNaN(max)) {
                return val < min || val > max ? { "range": true } : null;
            }
            else if (!isNaN(min)) {
                return val < min ? { "range": true } : null;
            }
            else if (!isNaN(max)) {
                return val > max ? { "range": true } : null;
            }
            else {
                return null;
            }
        };
    };
    return ValidationService;
}());
ValidationService = __decorate([
    core_1.Injectable()
], ValidationService);
exports.ValidationService = ValidationService;
//# sourceMappingURL=validation.service.js.map