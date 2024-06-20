import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/countries.services';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  public countries: Country[] = [];
  public title : string ='Por región';
  public placeholder: string = 'busqueda por region';
  public regions: Region[] = ['Africa', 'America','Asia', 'Europe', 'Oceania',]
  public selectedRegion?: Region;


  constructor(
    private _countryService: CountryService
  ) { }

  ngOnInit(): void {
    this.countries = this._countryService.cacheStore.byRegion.countries
    this.selectedRegion = this._countryService.cacheStore.byRegion.region;
  }


  searchByTerm(value: Region): void {
    this.selectedRegion = value;
    this._countryService.searchRegion(value)
      .subscribe(countries => {
        this.countries = countries;
      })
    console.log('serchCapital -->', value);
  }
}
