import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [],
})
export class PorCapitalComponent {
  //constructor para llamar el servicio
  constructor(private paisservice: PaisService) {}
  //variable para detectar errores
  hayerror: boolean = false;
  //variable de busqueda
  termino: string = 'hola mundo';
  //array para almacenar los resultados de la busqueda
  paises: country[] = [];
  //metodo para buscar paises
  buscar(termino: string) {
    //en caso de que no haya algun error la variable se mantiene en false
    this.hayerror = false;
    /*con la data que envio el evento on enter de la clase pais-input.component 
     se le asigna al termino que recibe este metodo para poder hacer la busqueda
   */
    this.termino = termino;
    //metodo del servicio para realizar la busqueda mediante una peticion http
    this.paisservice.buscarcapital(this.termino).subscribe(
      (pais) => {
        this.paises = pais;
      },
      (err) => {
        //en caso de haber error la variable pasa a ser true y regresa un array vacio
        this.hayerror = true;
        this.paises = [];
      }
    );
  }
  sugerencias(termino: string) {
    this.hayerror = false;
  }
}
