import { Component } from '@angular/core';
import {Router, Routes, RouterModule} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent
 {
  constructor(private router: Router) {}
  irPaginaSession(n : Number)
  {
    this.router.navigate(['/seccion/'+n ])
  }
}
