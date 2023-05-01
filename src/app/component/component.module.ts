import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { SeccionComponent } from './seccion/seccion.component';

@NgModule({
  declarations: [NavbarComponent,FooterComponent,CardComponent, SeccionComponent],
  imports: [
    CommonModule
  ],exports:[
    NavbarComponent,
    FooterComponent,
    CardComponent,
    SeccionComponent
  ]
})
export class ComponentModule {

}
