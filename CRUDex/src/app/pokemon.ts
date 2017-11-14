import { Forme } from './forme';

export class Pokemon {
  Id: number;           //National Pokedex Id
  Name: string;         //Name
  Formes: Forme[];      //All possible formes of a Pokemon
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
