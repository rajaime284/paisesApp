import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interface/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country [] = [];


  constructor(private paisService: PaisService) { }

  buscar( termino: string){
    console.log(this.termino);

    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPais(termino)
    .subscribe((paises) => {
        console.log(paises);
        this.paises = paises;
      }, (err) =>{
        console.log('Error'),
        console.info(err),
        this.hayError = true;
        this.paises = [];
      });
  }

  sugerencias( termino: string ){

    this.hayError = false;
    this.termino = termino;

  }

}
