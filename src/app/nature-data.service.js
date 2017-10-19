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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var NatureDataService = (function () {
    function NatureDataService(http) {
        this.http = http;
        this.natureUrl = 'api/natureList';
    }
    //Returns the natureList from the in-memory data
    NatureDataService.prototype.getNatureList = function () {
        return this.http.get(this.natureUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    //Handles errors from the other methods
    NatureDataService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    //Takes a Nature name and returns the associated Nature object
    NatureDataService.prototype.getNature = function (name) {
        return this.getNatureList()
            .then(function (natureList) { return natureList.find(function (nature) { return nature.name === name; }); });
    };
    return NatureDataService;
}());
NatureDataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], NatureDataService);
exports.NatureDataService = NatureDataService;
//# sourceMappingURL=nature-data.service.js.map