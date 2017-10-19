import { Injectable } from '@angular/core';
import { FormControl, ValidatorFn, AbstractControl, Validator, Validators, FormGroup } from "@angular/forms";

@Injectable()
export class ValidationService {

  //Checks if a value is between a certain min and max
  public static NumericRangeValidator(min?: number, max?: number): ValidatorFn {
    return (control: FormControl): { [key: string]: boolean } => {
      let val: number = control.value;

      if (val === null || control.value === "") {
        return null;
      } else if (!isNaN(min) && !isNaN(max)) {
        return val < min || val > max ? { "range": true } : null;
      } else if (!isNaN(min)) {
        return val < min ? { "range": true } : null;
      } else if (!isNaN(max)) {
        return val > max ? { "range": true } : null;
      } else {
        return null;
      }
    };
  }
}
