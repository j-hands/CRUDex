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

  constructor(private pokedexDataService: PokedexDataService){}

  //Retrieves pokemonList from the backend
  getPokemonList(): void {
    this.pokedexDataService.getPokemonList()
      .subscribe(
        pokemonList => this.pokemonList = pokemonList
      );
  }

  //Initializes pokemonList
  ngOnInit(): void{
    this.getPokemonList();
  }

  //Handles when the user selects a Pokemon from the list
  onSelect(pokemon: Pokemon): void {
    this.selectedPokemon = pokemon;
    this.formeList = pokemon.Formes;
  }
}
