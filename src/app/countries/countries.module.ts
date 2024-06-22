import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ByCapitalPageComponent } from './page/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './page/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './page/by-region-page/by-region-page.component';
import { CountriesRoutingModule } from './countries.-routing.module';
import { CountryPageComponent } from './page/country-page/country-page.component';

import { SharedModule } from '../shared/shared.module';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { NowTimeZonePipe } from './pipes/now-time-zone.pipe';


@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByCountryPageComponent,
    ByRegionPageComponent,
    CountryPageComponent,
    CountryTableComponent,
    /** Pipes */
    NowTimeZonePipe

  ],
  imports: [
    CommonModule,
    CountriesRoutingModule, /** ojo siempre colocar acá los router hijos o independiente de cada modulo */
    SharedModule,/** modulo global */
  ]
})
export class CountriesModule { }
