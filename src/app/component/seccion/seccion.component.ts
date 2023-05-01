import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.css']
})
export class SeccionComponent 
{
  imagePath: string | undefined;

  constructor(private route: ActivatedRoute) { 
    const coach = this.route.snapshot.paramMap.get('coach');
    //this.setearImg(coach);
    console.log(coach);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
    let id = params.get('coach');
    if (id && id !== '') {
      this.setearImg(+id);
    }
  });
  }
 
  setearImg(variable: number)
  {
    this.imagePath = 'assets/imgs/sesion01/session01_0'+ variable+'.png';
  }
  
}
