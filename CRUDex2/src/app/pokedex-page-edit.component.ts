import { Component, OnInit, OnChanges, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Pokemon } from './pokemon';
import { Forme } from './forme';
import { PokedexDataService } from './pokedex-data.service';

@Component({
  selector: 'pokedex-page-edit',
  templateUrl: './pokedex-page-edit.component.html',
  styleUrls: ['./pokedex-page-edit.component.css'],
  providers: [PokedexDataService]
})

export class PokedexPageEditComponent {
  @Input() pokemon: Pokemon;
  @Input() formeList: Forme[];
  formeId: number;
  selectedForme: Forme;
  debugSuccess: boolean; //Testing variable
  @Output() onRefresh = new EventEmitter<boolean>();

  formeSelector: FormGroup;

  constructor(private fb: FormBuilder,
    private pokedexDataService: PokedexDataService) {}

  ngOnInit(): void {
    this.formeId = this.formeList[0].Id;
    this.formeSelector = this.fb.group({
      pokemonForme: [this.formeId],
    });
    this.updateFormeSelector(this.formeId);
    this.debugSuccess = false;
  }

  ngOnChanges(): void {
    if (!!this.formeSelector && !!this.formeList && this.formeList.length >0) {
      this.formeSelector.get("pokemonForme").setValue(this.formeList[0].Id);
      this.updateFormeSelector(this.formeList[0].Id);
    }
  }

  public parseForme(formeId: string): void {
    if (!!formeId && formeId === "Add Forme"){
      this.newForme();
    } else
    if (!!formeId) {
      let id = formeId.split(": ")[1];
      let numericId = +id;
      this.updateFormeSelector(numericId);
    }
  }

  public updateFormeSelector(formeId: number): void {
    if (!!formeId) {
      for (let forme of this.formeList)
        if (forme.Id === formeId) {
          this.selectedForme = forme ;
          this.formeSelector.get("pokemonForme").setValue(forme.Id);
        }
    }
  }

  public newForme() {
    this.save();
    let emptyForme = new Forme('New Forme',0,0,0,0,0,0,'Normal','','Image Path','Description',this.pokemon.Id);
    this.pokedexDataService.addForme(emptyForme).subscribe(
      addedForme => {
        console.log(addedForme),
        this.onRefresh.emit(true)
      }
    );
  }

  public save() {
    for(let forme of this.formeList)
      this.pokedexDataService.updateForme(forme).subscribe();
    this.pokedexDataService.updatePokemon(this.pokemon).subscribe();
  }

  public deleteForme(forme: Forme) {
    this.pokedexDataService.deleteForme(forme).subscribe(
      () => this.onRefresh.emit(true)
    );
  }
}

