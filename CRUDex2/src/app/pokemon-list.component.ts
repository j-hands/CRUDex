import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import * as rsx from 'rxjs';

import { Pokemon } from './pokemon';
import { Forme } from './forme';
import { PokedexDataService } from './pokedex-data.service';
import { PokedexPageComponent } from './pokedex-page.component';
import { PokedexPageEditComponent } from './pokedex-page-edit.component';

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
  addedPokemon: Pokemon; //New Pokemon object
  formeList: Forme[]; //List of Pokemon formes
  edit: boolean = false;


  constructor(private pokedexDataService: PokedexDataService){}

  //Retrieves pokemonList from the backend
  getPokemonList(callback?: Function){
    this.pokedexDataService.getPokemonList()
      .subscribe(
        pokemonList => {
          this.pokemonList = pokemonList;
          if (callback) {
            callback();
          }
        }
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
    this.getPokemonList(
      () => {
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
    );
  }

  newPokemon() {
    let emptyPokemon = new Pokemon('New Pokemon',0);
    this.pokedexDataService.addPokemon(emptyPokemon).subscribe(
      addedPokemon => {
        this.addedPokemon = addedPokemon;
        let emptyForme = new Forme('New Forme',0,0,0,0,0,0,'Normal','','Image Path','Description',this.addedPokemon.Id);
        this.pokedexDataService.addForme(emptyForme).subscribe(
          addedForme => {
            this.getPokemonList();
          }
        )
      }
    )
  }

  deletePokemon() {
    for(let forme of this.formeList) {
      this.pokedexDataService.deleteForme(forme).subscribe();
    }
    this.pokedexDataService.deletePokemon(this.selectedPokemon).subscribe(
      () => {
        this.selectedPokemon = null;
        this.getPokemonList();
      }
    );
  }
}
