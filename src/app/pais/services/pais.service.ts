import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  constructor(private http: HttpClient) {}
  private apiurl: string = 'https://restcountries.eu/rest/v2';
  buscarpais(termino: string): Observable<country[]> {
    const url: string = `${this.apiurl}/name/${termino}`;
    return this.http.get<country[]>(url);
  }
  buscarcapital(termino: string): Observable<country[]> {
    const url: string = `${this.apiurl}/capital/${termino}`;
    return this.http.get<country[]>(url);
  }
  buscarpaisporid(id: string): Observable<country> {
    const url: string = `${this.apiurl}/alpha/${id}`;
    return this.http.get<country>(url);
  }
  buscarpaisporregion(region: string): Observable<country[]> {
    const url: string = `${this.apiurl}/region/${region}`;
    return this.http.get<country[]>(url);
  }
}
