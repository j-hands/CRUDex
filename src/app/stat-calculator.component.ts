import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { NatureDataService } from './nature-data.service';
import { ValidationService } from './validation.service';

import { Pokemon } from './pokemon';
import { Nature } from './nature';

@Component({
  selector: 'stat-calculator',
  templateUrl: './stat-calculator.component.html',
  styleUrls: ['./pokedex-page.component.css']
})

export class StatCalculatorComponent {
  @Input() pokemon: Pokemon; //Takes the selected Pokemon from PokedexPageComponent

  statCalcForm: FormGroup; //Form for stat calculation
  natureList: Nature[]; //The list of selectable Nature objects

  constructor(
    private fb: FormBuilder,
    private natureDataService: NatureDataService,
  ) {}

  //Retrieves the natureList from in-memory data
  getNatureList(): void {
    this.natureDataService.getNatureList()
      .then(natureList => this.natureList = natureList);
  }

  //Initializes natureList and sets up the statCalcForm
  ngOnInit(): void {
    this.getNatureList();

    this.statCalcForm = this.fb.group({
      healthIv: [31, ValidationService.NumericRangeValidator(0,31)],
      attackIv: [31, ValidationService.NumericRangeValidator(0,31)],
      defenseIv: [31, ValidationService.NumericRangeValidator(0,31)],
      spAttackIv: [31, ValidationService.NumericRangeValidator(0,31)],
      spDefenseIv: [31, ValidationService.NumericRangeValidator(0,31)],
      speedIv: [31, ValidationService.NumericRangeValidator(0,31)],
      healthEv: [0, ValidationService.NumericRangeValidator(0,255)],
      attackEv: [0, ValidationService.NumericRangeValidator(0,255)],
      defenseEv: [0, ValidationService.NumericRangeValidator(0,255)],
      spAttackEv: [0, ValidationService.NumericRangeValidator(0,255)],
      spDefenseEv: [0, ValidationService.NumericRangeValidator(0,255)],
      speedEv: [0, ValidationService.NumericRangeValidator(0,255)],
      nature: ['Select a nature'],
      level: [100, ValidationService.NumericRangeValidator(1,100)],
    });
  }
}
