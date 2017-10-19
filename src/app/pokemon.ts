import { Forme } from './forme';

export class Pokemon {
  pokemonId: number;           //National Pokedex Id
  pokemonName: string;         //Name
  formes: Forme[];
  /*hp: number;     //Base health points
  att: number;    //Base attack
  def: number;    //Base defense
  spa: number;    //Base special attack
  spd: number;    //Base special defense
  spe: number;    //Base speed
  type1: string;  //Primary type
  type2: string;  //Secondary type (Can be null)
  image: string;  //Path for artwork*/
}
