"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var ng2_sticky_kit_1 = require("ng2-sticky-kit");
var round_down_pipe_1 = require("./round-down.pipe");
var app_component_1 = require("./app.component");
var pokemon_list_component_1 = require("./pokemon-list.component");
var pokedex_page_component_1 = require("./pokedex-page.component");
var stat_calculator_component_1 = require("./stat-calculator.component");
var pokedex_data_service_1 = require("./pokedex-data.service");
var nature_data_service_1 = require("./nature-data.service");
var validation_service_1 = require("./validation.service");
var routes = [
    { path: '', redirectTo: '/pokemon-list', pathMatch: 'full' },
    { path: 'pokemon-list', component: pokemon_list_component_1.PokemonListComponent },
    { path: 'pokedex-data/:name', component: pokedex_page_component_1.PokedexPageComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(routes),
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            http_1.HttpModule,
            //InMemoryWebApiModule.forRoot(InMemoryDataService),
            ng2_sticky_kit_1.StickyModule,
        ],
        declarations: [
            app_component_1.AppComponent,
            pokemon_list_component_1.PokemonListComponent,
            pokedex_page_component_1.PokedexPageComponent,
            stat_calculator_component_1.StatCalculatorComponent,
            round_down_pipe_1.RoundDownPipe,
        ],
        providers: [
            pokedex_data_service_1.PokedexDataService,
            nature_data_service_1.NatureDataService,
            validation_service_1.ValidationService,
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map