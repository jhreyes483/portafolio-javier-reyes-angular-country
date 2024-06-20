import { Component , OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CountryService } from '../../services/countries.services';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit{
  public country?: Country;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _countryService: CountryService,
  ){}

  ngOnInit(): void {
    this._route.params
    .pipe(
      switchMap(({id})  =>this._countryService.searchCountryByAlphaCode(id)),
    )
    .subscribe(country =>{
      if(!country) return this._router.navigateByUrl('');
      return this.country = country;
    })
  }
}
