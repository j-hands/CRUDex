import { Pokemon } from './pokemon';

export class Forme {
  formeId: number;
  formeName: string;
  hp: number;
  att: number;
  def: number;
  spa: number;
  spd: number;
  spe: number;
  type1: string;
  type2: string;
  image: string;
  mainPokemonId: number;
  mainPokemon: Pokemon;
}
