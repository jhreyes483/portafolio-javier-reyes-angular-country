import{A as u,B as I,C as F,D as P,E as R,F as V,G as X,H as M,I as x,J as j,K as Y,L as Z,P as ee,R as te,S as ie,T as U,X as D,Y as ne,_ as re,a as O,b as $,c as k,d as z,e as H,f as y,g as J,h as E,i as G,j as d,k as T,l as K,m as Q,n as B,o as c,p as h,q as f,r as p,s as o,t as r,u as m,v as W,w as C,x as v,y as w,z as a}from"./chunk-7ZIXVZHA.js";var g=(()=>{let e=class e{constructor(t){this._http=t,this.cacheStore={byCapital:{term:"",countries:[]},byCountries:{term:"",countries:[]},byRegion:{region:"",countries:[]}},this.apiUrl="https://restcountries.com/v3.1",this.loadFromLocalStorage()}getContriesRequest(t){return this._http.get(t).pipe(z(2e3),k(n=>(console.log(n),O([]))))}saveToLocalStorage(){localStorage.setItem("cacheStore",JSON.stringify(this.cacheStore))}loadFromLocalStorage(){localStorage.getItem("cacheStore")&&(this.cacheStore=JSON.parse(localStorage.getItem("cacheStore")))}searchCountryByAlphaCode(t){return this._http.get(this.apiUrl+"/alpha/"+t).pipe($(n=>n.length>0?n[0]:null),k(n=>(console.log(n),O(null))))}searchCapital(t){let n=this.apiUrl+"/capital/"+t;return this.getContriesRequest(n).pipe(y(s=>this.cacheStore.byCapital={term:t,countries:s}),y(()=>this.saveToLocalStorage()))}searchCountry(t){let n=this.apiUrl+"/name/"+t;return this.getContriesRequest(n).pipe(y(s=>this.cacheStore.byCountries={term:t,countries:s}),y(()=>this.saveToLocalStorage()))}searchRegion(t){let n=this.apiUrl+"/region/"+t;return this.getContriesRequest(n).pipe(y(s=>this.cacheStore.byRegion={region:t,countries:s}),y(()=>this.saveToLocalStorage()))}};e.\u0275fac=function(n){return new(n||e)(G(Z))},e.\u0275prov=J({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var pe=i=>["/countries/by",i];function ue(i,e){i&1&&(o(0,"div",3),a(1," No hay pa\xEDses "),r())}function de(i,e){if(i&1&&(o(0,"tr")(1,"td"),a(2),r(),o(3,"td"),a(4),r(),o(5,"td"),m(6,"img",7),r(),o(7,"td"),a(8),r(),o(9,"td"),a(10),r(),o(11,"td"),a(12),P(13,"number"),r(),o(14,"td")(15,"a",8),m(16,"i",9),r()()()),i&2){let l=e.$implicit,t=e.index;c(2),u(t+1),c(2),u(l.flag),c(2),p("src",l.flags.svg,B)("alt",l.name.common),c(2),u(l.name.common),c(2),u(l.capital),c(2),u(R(13,8,l.population)),c(3),p("routerLink",F(10,pe,l.cca3))}}function he(i,e){if(i&1&&(o(0,"div",4)(1,"table",5)(2,"thead")(3,"tr")(4,"th"),a(5,"#"),r(),o(6,"th"),a(7,"Icon"),r(),o(8,"th"),a(9,"Bandera"),r(),o(10,"th"),a(11,"Nombre"),r(),o(12,"th"),a(13,"Capital"),r(),o(14,"th"),a(15,"Poblaci\xF3n"),r(),m(16,"th"),r()(),o(17,"tbody"),f(18,de,17,12,"tr",6),r()()()),i&2){let l=v();c(18),p("ngForOf",l.countries)}}var b=(()=>{let e=class e{constructor(){this.countries=[]}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=d({type:e,selectors:[["countries-table"]],inputs:{countries:"countries"},decls:4,vars:2,consts:[["table",""],[1,"row"],["class","alert alert-warning tex-ceter mx-auto",4,"ngIf","ngIfElse"],[1,"alert","alert-warning","tex-ceter","mx-auto"],[1,"table-responsive"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[3,"src","alt"],["href","",1,"btn","btn-sm","btn-info","btn-circle",3,"routerLink"],[1,"fas","fa-search"]],template:function(n,s){if(n&1&&(o(0,"div",1),f(1,ue,2,0,"div",2)(2,he,19,1,"ng-template",null,0,V),r()),n&2){let _=w(3);c(),p("ngIf",s.countries.length===0)("ngIfElse",_)}},dependencies:[M,x,ie,j],styles:["img[_ngcontent-%COMP%]{width:25px}"]});let i=e;return i})();function ge(i,e){i&1&&m(0,"shared-loading-spinner")}var oe=(()=>{let e=class e{constructor(t){this._countryService=t,this.countries=[],this.isLoading=!1,this.inputSearcInitialValue=""}searchByCapital(t){this.isLoading=!0,this._countryService.searchCapital(t).subscribe(n=>{this.countries=n,this.isLoading=!1}),console.log("serchCapital -->",t)}ngOnInit(){this.countries=this._countryService.cacheStore.byCapital.countries,this.inputSearcInitialValue=this._countryService.cacheStore.byCapital.term}};e.\u0275fac=function(n){return new(n||e)(h(g))},e.\u0275cmp=d({type:e,selectors:[["app-by-capital-page"]],decls:13,vars:4,consts:[[1,"text-blue-dark"],[1,"row"],[1,"col"],[3,"onValue","placeholder","inputSearcInitialValue"],[4,"ngIf"],[3,"countries"]],template:function(n,s){n&1&&(o(0,"h2",0),a(1,"Por Capital"),r(),m(2,"hr"),o(3,"div",1)(4,"div",2)(5,"shared-search-box",3),C("onValue",function(N){return s.searchByCapital(N)}),r(),m(6,"br"),f(7,ge,1,0,"shared-loading-spinner",4),r()(),o(8,"div",1)(9,"div",2)(10,"ul"),m(11,"countries-table",5),r()(),m(12,"hr"),r()),n&2&&(c(5),p("placeholder","Buscar capital")("inputSearcInitialValue",s.inputSearcInitialValue),c(2),p("ngIf",s.isLoading),c(4),p("countries",s.countries))},dependencies:[x,D,ne,b]});let i=e;return i})();var ae=(()=>{let e=class e{constructor(t){this._countryService=t,this.countries=[],this.title="Por pa\xEDs",this.placeholder="busqueda por pa\xEDs",this.inputSearcInitialValue=""}searchByTerm(t){this._countryService.searchCountry(t).subscribe(n=>{this.countries=n}),console.log("serchCapital -->",t)}ngOnInit(){this.countries=this._countryService.cacheStore.byCountries.countries,this.inputSearcInitialValue=this._countryService.cacheStore.byCountries.term}};e.\u0275fac=function(n){return new(n||e)(h(g))},e.\u0275cmp=d({type:e,selectors:[["app-by-country-page"]],decls:12,vars:4,consts:[[1,"text-blue-dark"],[1,"row"],[1,"col"],[3,"onValue","placeholder","inputSearcInitialValue"],[3,"countries"]],template:function(n,s){n&1&&(o(0,"h2",0),a(1),r(),m(2,"hr"),o(3,"div",1)(4,"div",2)(5,"shared-search-box",3),C("onValue",function(N){return s.searchByTerm(N)}),r(),m(6,"br"),r()(),o(7,"div",1)(8,"div",2)(9,"ul"),m(10,"countries-table",4),r()(),m(11,"hr"),r()),n&2&&(c(),u(s.title),c(4),p("placeholder",s.placeholder)("inputSearcInitialValue",s.inputSearcInitialValue),c(5),p("countries",s.countries))},dependencies:[D,b]});let i=e;return i})();var ye=i=>({"btn-outline-primary":i});function ve(i,e){if(i&1){let l=W();o(0,"button",6),C("click",function(){let n=K(l).$implicit,s=v();return Q(s.searchByTerm(n))}),a(1),r()}if(i&2){let l=e.$implicit,t=v();p("ngClass",F(2,ye,t.selectedRegion===l)),c(),I(" ",l," ")}}var ce=(()=>{let e=class e{constructor(t){this._countryService=t,this.countries=[],this.title="Por regi\xF3n",this.placeholder="busqueda por region",this.regions=["Africa","America","Asia","Europe","Oceania"]}ngOnInit(){this.countries=this._countryService.cacheStore.byRegion.countries,this.selectedRegion=this._countryService.cacheStore.byRegion.region}searchByTerm(t){this.selectedRegion=t,this._countryService.searchRegion(t).subscribe(n=>{this.countries=n}),console.log("serchCapital -->",t)}};e.\u0275fac=function(n){return new(n||e)(h(g))},e.\u0275cmp=d({type:e,selectors:[["app-by-region-page"]],decls:12,vars:3,consts:[[1,"text-blue-dark"],[1,"row"],[1,"col","text-center"],["class","btn mx-2 mb-3",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"col"],[3,"countries"],[1,"btn","mx-2","mb-3",3,"click","ngClass"]],template:function(n,s){n&1&&(o(0,"h2",0),a(1),r(),m(2,"hr"),o(3,"div",1)(4,"div",2),f(5,ve,2,4,"button",3),m(6,"br"),r()(),o(7,"div",1)(8,"div",4)(9,"ul"),m(10,"countries-table",5),r()(),m(11,"hr"),r()),n&2&&(c(),u(s.title),c(4),p("ngForOf",s.regions),c(5),p("countries",s.countries))},dependencies:[X,M,b]});let i=e;return i})();function Se(i,e){i&1&&(o(0,"div",2),a(1," Espere por favor "),r())}function Ce(i,e){if(i&1&&(o(0,"div",3)(1,"div",4)(2,"H2",5),a(3,"Pa\xEDs: "),o(4,"strong"),a(5),r()(),m(6,"hr"),r(),o(7,"div",6)(8,"div",7)(9,"h3"),a(10,"Bandera"),r(),m(11,"img",8),r(),o(12,"div",9)(13,"h3"),a(14,"Informaci\xF3n"),r(),o(15,"ul",10)(16,"li",11)(17,"strong"),a(18,"Poblaci\xF3n:"),r(),a(19),P(20,"number"),r(),o(21,"li",11)(22,"strong"),a(23,"C\xF3digo:"),r(),a(24),r()()(),o(25,"div",12)(26,"div",13)(27,"div",14)(28,"div",15)(29,"span",16),a(30),r(),o(31,"span",16),a(32),r(),o(33,"span",16),a(34),r(),o(35,"span",16),a(36),r(),o(37,"span",16),a(38),r(),o(39,"span",16),a(40),r()()()()()()()),i&2){let l=v();c(5),u(l.country.name.common),c(6),p("src",l.country.flags.svg,B)("alt",l.country.name.common),c(8),I(" ",R(20,11,l.country.population)," "),c(5),I(" ",l.country.cca3," "),c(6),u(l.country.translations.ara.common?l.country.translations.ara.common:""),c(2),u(l.country.translations.bre.common?l.country.translations.bre.common:""),c(2),u(l.country.translations.ces.common?l.country.translations.ces.common:""),c(2),u(l.country.translations.cym.common?l.country.translations.cym.common:""),c(2),u(l.country.translations.deu.common?l.country.translations.deu.common:""),c(2),u(l.country.translations.est.common?l.country.translations.est.common:"")}}var le=(()=>{let e=class e{constructor(t,n,s){this._route=t,this._router=n,this._countryService=s}ngOnInit(){this._route.params.pipe(H(({id:t})=>this._countryService.searchCountryByAlphaCode(t))).subscribe(t=>t?this.country=t:this._router.navigateByUrl(""))}};e.\u0275fac=function(n){return new(n||e)(h(ee),h(te),h(g))},e.\u0275cmp=d({type:e,selectors:[["app-country-page"]],decls:3,vars:2,consts:[["alert",""],["class","row",4,"ngIf","ngIfElse"],[1,"alert","alert-info","text-center"],[1,"row"],[1,"col-12"],[1,"text-blue-dark"],[1,"row","col-md-12","card-jav","shadow-sm"],[1,"col-4"],[1,"img-thumbnail",3,"src","alt"],[1,"col-8"],[1,"list-group"],[1,"list-group-item","item-list"],[1,"col-md-12"],[1,"row","mt-2"],[1,"col"],[1,"d-flex","flex-wrap"],[1,"badge","bg-primary","m-1"]],template:function(n,s){if(n&1&&f(0,Se,2,0,"ng-template",null,0,V)(2,Ce,41,13,"div",1),n&2){let _=w(1);c(2),p("ngIf",s.country)("ngIfElse",_)}},dependencies:[x,j]});let i=e;return i})();var xe=[{path:"by-capital",component:oe},{path:"by-country",component:ae},{path:"by-region",component:ce},{path:"by/:id",component:le},{path:"**",redirectTo:"by-capital"}],se=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=T({type:e}),e.\u0275inj=E({imports:[U.forChild(xe),U]});let i=e;return i})();var Qe=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=T({type:e}),e.\u0275inj=E({imports:[Y,se,re]});let i=e;return i})();export{Qe as CountriesModule};
