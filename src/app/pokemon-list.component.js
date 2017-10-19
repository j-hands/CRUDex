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
var pokedex_data_service_1 = require("./pokedex-data.service");
var PokemonListComponent = (function () {
    //selectedType1: string; //Selected Pokemon's primary type
    //selectedType2: string; //Selected Pokemon's secondary type, if applicable
    function PokemonListComponent(pokedexDataService) {
        this.pokedexDataService = pokedexDataService;
    }
    PokemonListComponent.prototype.getFormeList = function () {
        var _this = this;
        this.pokedexDataService.getFormeList()
            .then(function (formeList) { return _this.formeList = formeList; });
    };
    //Retrieves pokemonList from in-memory data
    PokemonListComponent.prototype.getPokemonList = function () {
        var _this = this;
        this.pokedexDataService.getPokemonList()
            .then(function (pokemonList) { return _this.pokemonList = pokemonList; });
    };
    //Initializes pokemonList
    PokemonListComponent.prototype.ngOnInit = function () {
        this.getFormeList();
        this.getPokemonList();
    };
    //Handles when the user selects a Pokemon from the list
    PokemonListComponent.prototype.onSelect = function (pokemon) {
        this.selectedPokemon = pokemon;
        /*this.selectedType1 = this.selectedPokemon.type1;
        if(this.selectedPokemon.type2 != null)
          this.selectedType2 = this.selectedPokemon.type2;
        else
          this.selectedType2 = null;*/
    };
    return PokemonListComponent;
}());
PokemonListComponent = __decorate([
    core_1.Component({
        selector: 'pokemon-list',
        templateUrl: './pokemon-list.component.html',
        styleUrls: ['./pokemon-list.component.css'],
        providers: [pokedex_data_service_1.PokedexDataService]
    }),
    __metadata("design:paramtypes", [pokedex_data_service_1.PokedexDataService])
], PokemonListComponent);
exports.PokemonListComponent = PokemonListComponent;
//# sourceMappingURL=pokemon-list.component.js.map