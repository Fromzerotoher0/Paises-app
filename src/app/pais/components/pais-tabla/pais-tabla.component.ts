import { Component, Input } from '@angular/core';
import { country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
})
export class PaisTablaComponent {
  constructor() {}
  //array para almacenar los resultados de la busqueda
  @Input() paises: country[] = [];
}
