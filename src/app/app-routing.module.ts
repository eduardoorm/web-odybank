
import {Routes,RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './page/home/home.component';
import { SeccionComponent } from './component/seccion/seccion.component';

const routes: Routes =[
    {path: 'home', component: HomeComponent},
    {path: 'seccion/:coach', component: SeccionComponent},
    {path: '**', pathMatch:'full', redirectTo:'home'}
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule{}
