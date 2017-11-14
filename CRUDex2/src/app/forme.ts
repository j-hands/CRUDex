import { Pokemon } from './pokemon';

export class Forme {
  Id: number;
  Name: string;
  Hp: number;
  Att: number;
  Def: number;
  Spa: number;
  Spd: number;
  Spe: number;
  Type1: string;
  Type2: string;
  Image: string;
  Description: string;
  PokemonId: number;

  constructor(name: string,
              hp: number,
              att: number,
              def: number,
              spa: number,
              spd: number,
              spe: number,
              type1: string,
              type2: string,
              image: string,
              description: string,
              pokemonId: number) {
    this.Name = name;
    this.Hp = hp;
    this.Att = att;
    this.Def = def;
    this.Spa = spa;
    this.Spd = spd;
    this.Spe = spe;
    this.Type1 = type1;
    this.Type2 = type2;
    this.Description = description;
    this.PokemonId = pokemonId;
  }
}
