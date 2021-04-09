import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';
import { country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [],
})
export class VerPaisComponent implements OnInit {
  pais!: country;
  constructor(
    private activatedroute: ActivatedRoute,
    private paisservice: PaisService
  ) {}

  ngOnInit() {
    this.activatedroute.params
      .pipe(
        switchMap(({ id }) => this.paisservice.buscarpaisporid(id)),
        tap(console.log)
      )
      .subscribe((pais) => {
        this.pais = pais;
      });
  }
}
