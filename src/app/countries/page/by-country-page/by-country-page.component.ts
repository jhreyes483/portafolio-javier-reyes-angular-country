import { Component , Input} from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/countries.services';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {
  public countries: Country[] = [];
  public title : string ='Por country';
  public placeholder: string = 'busqueda por country';
  public inputSearcInitialValue : string = '';

  constructor(
    private _countryService: CountryService
  ) { }

  searchByTerm(value: string): void {
    this._countryService.searchCountry(value)
      .subscribe(countries => {
        this.countries = countries;

      })

    console.log('serchCapital -->', value);
  }

  ngOnInit(): void {
    this.countries = this._countryService.cacheStore.byCountries.countries
    this.inputSearcInitialValue = this._countryService.cacheStore.byCountries.term;
  }

}
