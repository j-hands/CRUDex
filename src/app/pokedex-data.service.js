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
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var PokedexDataService = (function () {
    function PokedexDataService(http) {
        this.http = http;
        this.pokemonUrl = 'http://localhost:57135/api/pokemons';
        this.formeUrl = 'http://localhost:57135/api/formes';
    }
    //Returns the pokemonList from the backend database
    PokedexDataService.prototype.getPokemonList = function () {
        var cpHeaders = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: cpHeaders });
        return this.http.get(this.pokemonUrl, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    //Takes a Pokemon ID and returns the associated Pokemon object
    PokedexDataService.prototype.getPokemon = function (pokemonId) {
        var cpHeaders = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: cpHeaders });
        console.log(this.pokemonUrl + "/" + pokemonId);
        return this.http.get(this.pokemonUrl + "/" + pokemonId, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    PokedexDataService.prototype.getFormeList = function () {
        var cpHeaders = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: cpHeaders });
        return this.http.get(this.formeUrl, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    PokedexDataService.prototype.addPokemon = function (pokemon) {
        var cpHeaders = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: cpHeaders });
        return this.http.post(this.pokemonUrl, pokemon, options)
            .map(function (success) { return success.status; })
            .catch(this.handleError);
    };
    PokedexDataService.prototype.addForme = function (forme) {
        var cpHeaders = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: cpHeaders });
        return this.http.post(this.formeUrl, forme, options)
            .map(function (success) { return success.status; })
            .catch(this.handleError);
    };
    PokedexDataService.prototype.updatePokemon = function (pokemon) {
        var cpHeaders = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: cpHeaders });
        return this.http.put(this.pokemonUrl, pokemon, options)
            .map(function (success) { return success.status; })
            .catch(this.handleError);
    };
    PokedexDataService.prototype.updateForme = function (forme) {
        var cpHeaders = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: cpHeaders });
        return this.http.put(this.formeUrl, forme, options)
            .map(function (success) { return success.status; })
            .catch(this.handleError);
    };
    //Handles errors from the other methods
    PokedexDataService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    //Extracts data from some response
    PokedexDataService.prototype.extractData = function (response) {
        var body = response.json();
        return body;
    };
    return PokedexDataService;
}());
PokedexDataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PokedexDataService);
exports.PokedexDataService = PokedexDataService;
//# sourceMappingURL=pokedex-data.service.js.map