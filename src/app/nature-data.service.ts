import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Nature } from './nature';

@Injectable()
export class NatureDataService {
  private natureUrl = 'http://localhost:57135/api/natures';

  constructor(private http: Http) { }

  //Returns the natureList from the in-memory data
  getNatureList(): Promise<Nature[]> {
    return this.http.get(this.natureUrl)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  //Handles errors from the other methods
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  //Takes a Nature name and returns the associated Nature object
  getNature(name: string): Promise<Nature> {
    return this.getNatureList()
      .then(natureList => natureList.find(nature => nature.Name === name));
  }
}
