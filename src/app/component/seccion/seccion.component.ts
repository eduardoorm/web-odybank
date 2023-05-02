import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.css']
})
export class SeccionComponent 
{
  
  urlVideos: string[] = [
    "https://odybankody-my.sharepoint.com/:v:/g/personal/jormenom_odybank_com_pe/EbkoQETVpMxHuRimNn5xE_wB0qmQZyRU_gMjSvqpX5Lolw?email=eestebanq%40odybank.com.pe",
    "https://odybankody-my.sharepoint.com/:v:/g/personal/jormenom_odybank_com_pe/ERocPUniEmhHj92y3naoRxwBhQscILQqsTat6Go5Tz2jkA?email=eestebanq%40odybank.com.pe",
    "google.com",
    "google.com"
  ]

  urlTareas: string[] = [
    "https://docs.google.com/document/d/1GVJRVoYoJZwzzKqm7RdlGANQPgGt_Caozxr1Jde1TIo/edit?usp=share_link",
    "https://docs.google.com/document/d/1iuKQ8lUaEYLy9opes0XecU7vxffCt_hrGQLCSGOHEQU/edit?usp=share_link",
    "https://docs.google.com/document/d/1wXssGKttikVVDiIbxbu7xbFv6QxFzUZXhapeYH1Hhyo/edit?usp=share_link",
    "https://docs.google.com/document/d/1fHVOwaY495j7JdnTCchPA-LMmEUE35t__VSVo-4Np1c/edit?usp=share_link"
  ]

  urlExamen: string[] = [
    "https://docs.google.com/forms/d/e/1FAIpQLSftQ0S08W4f2BbrbMXChTWcS9tWj2cDtiL0ABD6B9AXc3KV1Q/viewform?usp=share_link",
    "https://docs.google.com/forms/d/e/1FAIpQLSdwhsO_GRYY2Wv_tePrCCHHXn51EzUf90FzHkhWosyfHJ-NPw/viewform?usp=share_link",
    "https://docs.google.com/forms/d/e/1FAIpQLSc40_Lq5-km-4Vw-GPMw-Y_g8xD0WkkrTF_LYdanCINJWvMXg/viewform?usp=share_link",
    "https://docs.google.com/forms/d/e/1FAIpQLSfepg87bjL7jJajq1Cle7FPJmCxQUXTrBTyuG1kIF9aeWkg7A/viewform?usp=share_link"
  ]

  imagePath: string | undefined;
  urlVideoLink : string | undefined;
  urlTareaLink: string | undefined;
  urlExamenLink: string | undefined;

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
    this.urlTareaLink = this.urlTareas[variable-1];
    this.urlExamenLink = this.urlExamen[variable -1];
    this.imagePath = 'assets/imgs/sesion01/session01_0'+ variable+'.png';
  }
  
}
