import { Component } from '@angular/core';

@Component({
  selector: 'crudex',
  template: `
    <h1>{{title}}</h1>
    <nav>
        <a routerLink="/pokemon-list" routerLinkActive="active">List of Pokemon</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CRUDex: A Pokedex and Stat Calculator';
}
