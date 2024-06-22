import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

/** componentes creados */
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';


// Configuración del idioma local de la app
import localeEsCO from '@angular/common/locales/es-CO'
import localeFrCA from '@angular/common/locales/fr-CA'
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEsCO)
registerLocaleData(localeFrCA)
/************************************* */



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    /** modulos */
    SharedModule,
    HttpClientModule, /** ojo este debe ir siempre que se quiera usar el httpClient como service */
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es-CO'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
