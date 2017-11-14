import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Pokemon } from './pokemon';
import { Forme } from './forme';

@Component({
  selector: 'pokedex-page',
  templateUrl: './pokedex-page.component.html',
  styleUrls: ['./pokedex-page.component.css']
})

export class PokedexPageComponent {
  @Input() pokemon: Pokemon;
  @Input() formeList: Forme[];
  formeId: number;
  selectedForme: Forme;

  formeSelector: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formeId = this.formeList[0].Id;
    this.formeSelector = this.fb.group({
      pokemonForme: [this.formeId],
    });
    this.updateForme(this.formeId);
  }

  ngOnChanges(): void {
    if (!!this.formeSelector && !!this.formeList && this.formeList.length >0) {
      this.formeSelector.get("pokemonForme").setValue(this.formeList[0].Id);
      this.updateForme(this.formeList[0].Id);
    }
  }

  public parseForme(formeId: string): void {
    if (!!formeId) {
      let id = formeId.split(": ")[1];
      let numericId = +id;
      this.updateForme(numericId);
    }
  }

  public updateForme(formeId: number): void {
    if (!!formeId) {
      for (let forme of this.formeList)
        if (forme.Id === formeId) {
          this.selectedForme = forme ;
          this.formeSelector.get("pokemonForme").setValue(forme.Id);
        }
    }
  }
}

