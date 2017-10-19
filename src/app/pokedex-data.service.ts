import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Pokemon } from './pokemon';
import { Forme } from './forme';

@Injectable()
export class PokedexDataService {
  private pokemonUrl = 'http://localhost:57135/api/pokemons';
  private formeUrl = 'http://localhost:57135/api/formes';

  constructor(private http: Http) { }

  getFormeList(): Promise<Forme[]> {
    return this.http.get(this.formeUrl)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  //Returns the pokemonList from the backend database
  getPokemonList(): Promise<Pokemon[]> {
    return this.http.get(this.pokemonUrl)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  //Handles errors from the other methods
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  //Takes a Pokemon ID and returns the associated Pokemon object
  getPokemon(id: number): Promise<Pokemon> {
    return this.getPokemonList()
      .then(pokemonList => pokemonList.find(pokemon => pokemon.pokemonId === id));
  }
}
