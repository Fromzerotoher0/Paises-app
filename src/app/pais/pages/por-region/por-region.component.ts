import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { country } from '../../interfaces/pais.interface';
@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [],
})
export class PorRegionComponent {
  constructor(private paisservice: PaisService) {}
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionactiva: string = '';
  hayerror = false;
  paises: country[] = [];
  activarregion(parametro: string) {
    this.regionactiva = parametro;
    //en caso de que no haya algun error la variable se mantiene en false
    this.hayerror = false;
    /*con la data que envio el evento on enter de la clase pais-input.component 
      se le asigna al termino que recibe este metodo para poder hacer la busqueda
    */
    this.regionactiva = this.regionactiva;
    //metodo del servicio para realizar la busqueda mediante una peticion http
    this.paisservice.buscarpaisporregion(this.regionactiva).subscribe(
      (pais) => {
        this.paises = pais;
      },
      (err) => {
        //en caso de haber error la variable pasa a ser true y regresa un array vacio
        this.hayerror = true;
        this.paises = [];
      }
    );

    /*classcss(region: string): string {
    return region === this.regionactiva
      ? 'btn bnt-dark'
      : 'btn btn-outline-primary';
  }
  */
  }
}
