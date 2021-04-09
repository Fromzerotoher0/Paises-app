import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class PorPaisComponent {
  //constructor para llamar el servicio
  constructor(private paisservice: PaisService) {}
  //variable para detectar errores
  hayerror: boolean = false;
  //variable de busqueda
  termino: string = 'hola mundo';
  //array para almacenar los resultados de la busqueda
  paises: country[] = [];
  paissugerido: country[] = [];
  mostrarsugerencia: boolean = false;
  //metodo para buscar paises
  buscar(termino: string) {
    //en caso de que no haya algun error la variable se mantiene en false
    this.hayerror = false;
    /*con la data que envio el evento on enter de la clase pais-input.component 
      se le asigna al termino que recibe este metodo para poder hacer la busqueda
    */
    this.termino = termino;
    //metodo del servicio para realizar la busqueda mediante una peticion http
    this.paisservice.buscarpais(this.termino).subscribe(
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
  //peticion http para buscar sugerencias
  sugerencias(termino: string) {
    this.termino = termino;
    this.hayerror = false;
    this.mostrarsugerencia = true;
    this.paisservice.buscarpais(termino).subscribe(
      (sugerencia) => {
        this.paissugerido = sugerencia.splice(0, 5);
        this.termino = termino;
      },
      (err: any) => {
        this.paissugerido = [];
      }
    );
  }

  //metodo para mostrar sugerencias
  buscarsugerido(termino: string) {
    this.buscar(termino);
    this.mostrarsugerencia = false;
  }
}
