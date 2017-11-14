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
var pokemon_1 = require("./pokemon");
var PokedexPageEditComponent = (function () {
    function PokedexPageEditComponent(fb) {
        this.fb = fb;
    }
    PokedexPageEditComponent.prototype.ngOnInit = function () {
        this.formeId = this.formeList[0].Id;
        this.formeSelector = this.fb.group({
            pokemonForme: [this.formeId],
        });
        this.updateForme(this.formeId);
    };
    PokedexPageEditComponent.prototype.ngOnChanges = function () {
        if (!!this.formeSelector && !!this.formeList && this.formeList.length > 0) {
            this.formeSelector.get("pokemonForme").setValue(this.formeList[0].Id);
            this.updateForme(this.formeList[0].Id);
        }
    };
    PokedexPageEditComponent.prototype.parseForme = function (formeId) {
        if (!!formeId) {
            var id = formeId.split(": ")[1];
            var numericId = +id;
            this.updateForme(numericId);
        }
    };
    PokedexPageEditComponent.prototype.updateForme = function (formeId) {
        if (!!formeId) {
            for (var _i = 0, _a = this.formeList; _i < _a.length; _i++) {
                var forme = _a[_i];
                if (forme.Id === formeId) {
                    this.selectedForme = forme;
                    this.formeSelector.get("pokemonForme").setValue(forme.Id);
                }
            }
        }
    };
    return PokedexPageEditComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", pokemon_1.Pokemon)
], PokedexPageEditComponent.prototype, "pokemon", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], PokedexPageEditComponent.prototype, "formeList", void 0);
PokedexPageEditComponent = __decorate([
    core_1.Component({
        selector: 'pokedex-page-edit',
        templateUrl: './pokedex-page-edit.component.html',
        styleUrls: ['./pokedex-page-edit.component.css']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], PokedexPageEditComponent);
exports.PokedexPageEditComponent = PokedexPageEditComponent;
//# sourceMappingURL=pokedex-page-edit.component.js.map