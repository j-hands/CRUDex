import { Forme } from './forme';

export class Pokemon {
  Id: number;           //Public Key
  Name: string;         //Name
  PokedexNumber: number;//National Pokedex number
  Formes: Forme[];      //All possible formes of a Pokemon

  constructor(name: string,
              pokedexNumber: number) {
    this.Name = name;
    this.PokedexNumber = pokedexNumber;
  }
}
