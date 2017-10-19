import { Component, Input } from '@angular/core';

import { Pokemon } from './pokemon';
import { Forme } from './forme';

@Component({
  selector: 'pokedex-page',
  templateUrl: './pokedex-page.component.html',
  styleUrls: ['./pokedex-page.component.css']
})

export class PokedexPageComponent {
  @Input() pokemon: Pokemon;
}
