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
  urlVideos: string[] = [
    "https://odybankody-my.sharepoint.com/:v:/g/personal/jormenom_odybank_com_pe/EbkoQETVpMxHuRimNn5xE_wB0qmQZyRU_gMjSvqpX5Lolw?email=eestebanq%40odybank.com.pe",
    "https://odybankody-my.sharepoint.com/:v:/g/personal/jormenom_odybank_com_pe/ERocPUniEmhHj92y3naoRxwBhQscILQqsTat6Go5Tz2jkA?email=eestebanq%40odybank.com.pe",
    "google.com",
    "google.com"
  ]

  urlVideoLink : string | undefined;
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
    this.urlVideoLink = this.urlVideos[variable-1];
    this.imagePath = 'assets/imgs/sesion01/session01_0'+ variable+'.png';
  }
  
}
