import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; /** ojo importar este router para que fincione el routerLink */

import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContactComponent } from './components/contact/contact.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';





@NgModule({
  declarations: [
    AboutPageComponent,
    HomePageComponent,
    SidebarComponent,
    ContactComponent,
    SearchBoxComponent,
    LoadingSpinnerComponent,

  ],
  imports: [
    CommonModule,
    RouterModule /** ojo importar este router para que fincione el routerLink */
  ],
  exports: [
    AboutPageComponent,
    HomePageComponent, /** siempre se debe exportar un modulo por lo menos el principal */
    SidebarComponent,
    ContactComponent,
    SearchBoxComponent,/** ojo hacer esta exportación para componente global */
    LoadingSpinnerComponent,
  ]
})
export class SharedModule { }
