"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var nature_data_service_1 = require("./nature-data.service");
var validation_service_1 = require("./validation.service");
var pokemon_1 = require("./pokemon");
var StatCalculatorComponent = (function () {
    function StatCalculatorComponent(fb, natureDataService) {
        this.fb = fb;
        this.natureDataService = natureDataService;
    }
    //Retrieves the natureList from in-memory data
    StatCalculatorComponent.prototype.getNatureList = function () {
        var _this = this;
        this.natureDataService.getNatureList()
            .then(function (natureList) { return _this.natureList = natureList; });
    };
    //Initializes natureList and sets up the statCalcForm
    StatCalculatorComponent.prototype.ngOnInit = function () {
        this.getNatureList();
        this.statCalcForm = this.fb.group({
            healthIv: [31, validation_service_1.ValidationService.NumericRangeValidator(0, 31)],
            attackIv: [31, validation_service_1.ValidationService.NumericRangeValidator(0, 31)],
            defenseIv: [31, validation_service_1.ValidationService.NumericRangeValidator(0, 31)],
            spAttackIv: [31, validation_service_1.ValidationService.NumericRangeValidator(0, 31)],
            spDefenseIv: [31, validation_service_1.ValidationService.NumericRangeValidator(0, 31)],
            speedIv: [31, validation_service_1.ValidationService.NumericRangeValidator(0, 31)],
            healthEv: [0, validation_service_1.ValidationService.NumericRangeValidator(0, 255)],
            attackEv: [0, validation_service_1.ValidationService.NumericRangeValidator(0, 255)],
            defenseEv: [0, validation_service_1.ValidationService.NumericRangeValidator(0, 255)],
            spAttackEv: [0, validation_service_1.ValidationService.NumericRangeValidator(0, 255)],
            spDefenseEv: [0, validation_service_1.ValidationService.NumericRangeValidator(0, 255)],
            speedEv: [0, validation_service_1.ValidationService.NumericRangeValidator(0, 255)],
            nature: ['Select a nature'],
            level: [100, validation_service_1.ValidationService.NumericRangeValidator(1, 100)],
        });
    };
    return StatCalculatorComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", pokemon_1.Pokemon)
], StatCalculatorComponent.prototype, "pokemon", void 0);
StatCalculatorComponent = __decorate([
    core_1.Component({
        selector: 'stat-calculator',
        templateUrl: './stat-calculator.component.html',
        styleUrls: ['./pokedex-page.component.css']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        nature_data_service_1.NatureDataService])
], StatCalculatorComponent);
exports.StatCalculatorComponent = StatCalculatorComponent;
//# sourceMappingURL=stat-calculator.component.js.map