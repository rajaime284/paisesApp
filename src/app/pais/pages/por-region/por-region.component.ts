import { Component } from '@angular/core';


import { Country } from '../../interface/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
    button:{
    margin-left: 5px;
    }
    `
  ]
})
export class PorRegionComponent {

  regiones: string [] = ['africa', 'americas', 'asia', 'europe', 'oceania']
  regionActiva: string = '';
  paises: Country [] = [];
  hayError: boolean = false;

  constructor(private paisService: PaisService) { }

  activarRegion(region: string){

    if(region === this.regionActiva) return;
    this.regionActiva = region;
    this.hayError = false;

    this.paisService.getPaisesRegion(region)
    .subscribe((paises) => {
      console.log(paises);
      this.paises = paises;
    },
      (error) =>{
        console.log(error),
        console.info(error),
        this.hayError = true;
        this.paises = [];

    });


  }

  getClassCSS(region: string): string{
    return (region === this.regionActiva)
    ? 'btn btn-primary'
    : 'btn btn-outline-primary';
  }


}
