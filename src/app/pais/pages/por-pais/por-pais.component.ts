import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interface/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li
    {
      cursor: pointer;
    }
    `
  ]
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country [] = [];
  paisesSugeridos: Country [] = [];
  mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService) { }

  buscar( termino: string){
    console.log(this.termino);

    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = false;

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
    this.mostrarSugerencias = true;
    this.paisService.buscarPais(termino )
    .subscribe(paises_s =>
      this.paisesSugeridos= paises_s.splice(0,3),
      (err) => this.paisesSugeridos = []
    );

  }

  buscarSugerido(termino: string){
    this.buscar(termino);
  }

}
