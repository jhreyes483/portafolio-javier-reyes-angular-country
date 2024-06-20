import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/countries.services';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent implements OnInit {
  public countries: Country[] = [];
  public isLoading : boolean = false;
  public inputSearcInitialValue : string = '';

  constructor(
    private _countryService: CountryService
  ) { }


  searchByCapital(value: string): void {
    this.isLoading = true;
    this._countryService.searchCapital(value)
      .subscribe(countries => {
        this.countries = countries;
        this.isLoading = false;

      })

    console.log('serchCapital -->', value);
  }

  ngOnInit(): void {
    this.countries = this._countryService.cacheStore.byCapital.countries;
    this.inputSearcInitialValue = this._countryService.cacheStore.byCapital.term;
  }

}
