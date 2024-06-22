import { Component , OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CountryService } from '../../services/countries.services';
import { switchMap,tap } from 'rxjs';
import { Country, Currencie, Currencies } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit{
  public country?: Country;
  public lenguaje : string ='';
  public currencie :any
  private key : any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _countryService: CountryService,
  ){}

  ngOnInit(): void {
    this._route.params
    .pipe(
      switchMap(({id})  =>this._countryService.searchCountryByAlphaCode(id)),
      tap(
        country => {
           this.lenguaje = Object.values(country!.languages)[0],

          this.key       = Object.keys(country!.currencies)[0];
          this.currencie = {
            name: country!.currencies[this.key]?.name,
            symbol: country!.currencies[this.key]?.symbol
          };
        },
      ),

    )
    .subscribe(country =>{
      if(!country) return this._router.navigateByUrl('');
      return this.country = country;
    })
  }
}
function tab(): import("rxjs").OperatorFunction<Country | null, unknown> {
  throw new Error('Function not implemented.');
}

