import { Pipe } from '@angular/core';

@Pipe({name: 'roundDown'})

export class RoundDownPipe {
  //Rounds the value down
  transform (input:number) {
    return Math.floor(input);
  }
}
