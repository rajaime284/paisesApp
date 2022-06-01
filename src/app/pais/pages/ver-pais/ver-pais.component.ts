import { PostalCode } from './../../interface/pais.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs';
import { Country, Translation } from '../../interface/pais.interface';


@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;
  loading: boolean = false;

  constructor(private activateRoute: ActivatedRoute,
              private paisService: PaisService) { }

  ngOnInit(): void {
   //haciendo un observable con rxjs

/*
   this.activateRoute.params
   .pipe(
     switchMap(({id}) => this.paisService.getPaisAlpha(id)),
     tap(console.log)
   )
   .subscribe(pais =>this.pais = pais
    );
*/

   //haciendo dos observables
    this.activateRoute.params
    .subscribe(({id}) =>{
      console.log(id);
      this.paisService.getPaisAlpha(id)
      .subscribe(pais =>{
        console.log(pais);
        this.pais = pais;
        console.log(this.pais);

        console.log(this.pais.translations['ara'].official);

        this.loading = true
      })
    })

  }

}
