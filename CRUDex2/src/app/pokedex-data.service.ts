import { Injectable } from '@angular/core';
import { Headers, Response, URLSearchParams, RequestOptions, Http } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Pokemon } from './pokemon';
import { Forme } from './forme';

@Injectable()
export class PokedexDataService {
  private pokemonUrl = 'http://localhost:57135/api/Pokemons';
  private formeUrl = 'http://localhost:57135/api/Formes';

  constructor(private http: Http) { }

  //Returns the pokemonList from the database
  getPokemonList(): Observable<Pokemon[]> {
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: cpHeaders });
    return this.http.get(this.pokemonUrl, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  //Takes a Pokemon ID and returns the associated Pokemon object
  getPokemon(pokemonId: string): Observable<Pokemon> {
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: cpHeaders });
    console.log(this.pokemonUrl +"/"+ pokemonId);
    return this.http.get(this.pokemonUrl +"/"+ pokemonId, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getFormeList(): Observable<Forme[]> {
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: cpHeaders });
    return this.http.get(this.formeUrl, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  addPokemon(pokemon: Pokemon): Observable<Pokemon> {
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: cpHeaders });
    return this.http.post(this.pokemonUrl, pokemon, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  addForme(forme: Forme): Observable<Forme> {
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: cpHeaders });
    return this.http.post(this.formeUrl, forme, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  updatePokemon(pokemon: Pokemon): Observable<Pokemon> {
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: cpHeaders });
    return this.http.put(this.pokemonUrl+"/"+pokemon.Id, pokemon, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  updateForme(forme: Forme): Observable<Forme> {
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: cpHeaders });
    return this.http.put(this.formeUrl+"/"+forme.Id, forme, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  deletePokemon(pokemon: Pokemon): Observable<Pokemon> {
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: cpHeaders });
    return this.http.delete(this.pokemonUrl+"/"+pokemon.Id, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  deleteForme(forme: Forme): Observable<Forme> {
    let cpHeaders = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: cpHeaders});
    return this.http.delete(this.formeUrl + "/" + forme.Id, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  //Handles errors from the other methods
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  //Extracts data from some response
  private extractData(response: Response) {
    let body = response.json();
    return body;
  }
}
