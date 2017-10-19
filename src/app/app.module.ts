import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { StickyModule } from 'ng2-sticky-kit';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { RoundDownPipe } from './round-down.pipe';

import { AppComponent }  from './app.component';
import { PokemonListComponent } from './pokemon-list.component';
import { PokedexPageComponent } from './pokedex-page.component';
import { StatCalculatorComponent } from './stat-calculator.component';

import { PokedexDataService } from './pokedex-data.service';
import { NatureDataService } from './nature-data.service';
import { ValidationService } from './validation.service';

const routes: Routes = [
  { path: '', redirectTo: '/pokemon-list', pathMatch: 'full'},
  { path: 'pokemon-list', component: PokemonListComponent },
  { path: 'pokedex-data/:name', component: PokedexPageComponent }
];

@NgModule({
  imports:      [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    //InMemoryWebApiModule.forRoot(InMemoryDataService),
    StickyModule,
  ],
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokedexPageComponent,
    StatCalculatorComponent,
    RoundDownPipe,
  ],
  providers: [
    PokedexDataService,
    NatureDataService,
    ValidationService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
