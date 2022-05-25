import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interface/pais.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: []
})
export class PaisTablaComponent implements OnInit {

  @Input() paises: Country [] = [];
  @Input()  hayError: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
