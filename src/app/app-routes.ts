import {RouterModule, Routes} from '@angular/router'
import { AppComponent } from './app.component'
import { SeccionComponent } from './component/seccion/seccion.component'

export const app_routes: Routes = [
    {path : 'home', component: AppComponent},
    {path: 'seccion', component: SeccionComponent}
];
export const app_routing = RouterModule.forRoot(app_routes);