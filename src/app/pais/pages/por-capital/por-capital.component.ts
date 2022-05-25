import { Component, OnInit } from '@angular/core';
import { Country } from '../../interface/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {


  termino: string = '';
  hayError: boolean = false;
  paises: Country [] = [];


  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }
  buscar( termino: string){
    console.log(this.termino);

    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarCapital(this.termino)
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



}
