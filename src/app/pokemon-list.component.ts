import { Component, OnInit } from '@angular/core';

import { Pokemon } from './pokemon';
import { Forme } from './forme';
import { PokedexDataService } from './pokedex-data.service';
import { PokedexPageComponent } from './pokedex-page.component';

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
  providers: [PokedexDataService]
})

export class PokemonListComponent implements OnInit{
  pokemonList: Pokemon[]; //List of selectable Pokemon
  selectedPokemon: Pokemon; //Selected Pokemon object
  formeList: Forme[]; //List of Pokemon formes
  //selectedType1: string; //Selected Pokemon's primary type
  //selectedType2: string; //Selected Pokemon's secondary type, if applicable

  constructor(private pokedexDataService: PokedexDataService){}

  getFormeList(): void {
    this.pokedexDataService.getFormeList()
      .then(formeList => this.formeList = formeList);
  }

  //Retrieves pokemonList from in-memory data
  getPokemonList(): void {
    this.pokedexDataService.getPokemonList()
      .then(pokemonList => this.pokemonList = pokemonList);
  }

  //Initializes pokemonList
  ngOnInit(): void{
    this.getFormeList();
    this.getPokemonList();
  }

  //Handles when the user selects a Pokemon from the list
  onSelect(pokemon: Pokemon): void {
    this.selectedPokemon = pokemon;
    /*this.selectedType1 = this.selectedPokemon.type1;
    if(this.selectedPokemon.type2 != null)
      this.selectedType2 = this.selectedPokemon.type2;
    else
      this.selectedType2 = null;*/
  }
}
