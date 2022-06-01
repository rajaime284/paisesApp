import { Component,EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';



@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit{



  termino: string = '';

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string = '';

  debounce: Subject<string> = new Subject();


    ngOnInit() {
      this.debounce
      .pipe(debounceTime(300))
      .subscribe(valor => {
       this.onDebounce.emit(valor);
       console.log('debouncer:',valor);
      });
    }

    teclaPresionanda( ){
      this.debounce.next(this.termino);
    }

  buscar(){
    this.onEnter.emit(this.termino);
  }


}
