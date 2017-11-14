import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { Pokemon } from './pokemon';
import { Forme } from './forme';
import { PokedexDataService } from './pokedex-data.service';
import { PokedexPageComponent } from './pokedex-page.component';
import { PokedexPageEditComponent } from './pokedex-page-edit.component';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import * as rsx from 'rxjs';

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: [],
  providers: [PokedexDataService]
})

export class PokemonListComponent implements OnInit{
  @ViewChild(PokedexPageEditComponent)
    private pageEditComponent: PokedexPageEditComponent;
  pokemonList: Pokemon[]; //List of selectable Pokemon
  selectedPokemon: Pokemon; //Selected Pokemon object
  formeList: Forme[]; //List of Pokemon formes
  edit: boolean = false;


  constructor(private pokedexDataService: PokedexDataService){}

  //Retrieves pokemonList from the backend
  getPokemonList(){
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

  toggleEdit(): void {
    this.edit = !this.edit;
  }

  save() {
    this.pageEditComponent.save();
    this.toggleEdit();
  }

  onRefresh(refresh: boolean) {
    this.getPokemonList();
    let selectedPokemonId = this.selectedPokemon.Id;
    let pokemon: Pokemon;
    for(pokemon of this.pokemonList) {
      if (pokemon.Id === selectedPokemonId) {
        this.onSelect(pokemon);
      }
    }
    this.save();
    this.toggleEdit();
  }
}
