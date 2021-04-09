import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [],
})
export class PaisInputComponent implements OnInit {
  //definir placeholder
  @Input() placeholder: string = '';
  //decorador para enviar datos a otras clases
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() ondebounce: EventEmitter<string> = new EventEmitter();
  //debouncer
  debouncer: Subject<string> = new Subject();
  termino: string = '';
  //on init
  ngOnInit() {
    //suscribir debouncer
    this.debouncer.pipe(debounceTime(300)).subscribe((valor) => {
      this.ondebounce.emit(valor);
    });
  }
  buscar() {
    //al iniciar este metodo se emite el termino de busqueda para que lo reciba por-pais.component
    this.onEnter.emit(this.termino);
  }
  teclapresionada(event: any) {
    this.debouncer.next(this.termino);
  }
}
