import { HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import {Country} from '../interface/pais.interface'

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';
  private apiCampos: string = '?fields=name,capital,cca2,population,ccn3,flags,translations'

  constructor(private http: HttpClient) { }

  get httpParams(){
    return  new HttpParams().set('fields', 'name,capital,cca2,population,cca3,ccn3,flags,translations')

  }

  buscarPais(termino: string): Observable<Country []>{
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url, {params: this.httpParams})
    .pipe(tap(console.log));
  }

  buscarCapital(termino: string): Observable<Country []>{
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url, {params: this.httpParams})
    .pipe(tap(console.log));
  }
  getPaisAlpha(id: string): Observable<Country>{
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url, {params: this.httpParams})  //, {params: this.httpParams}
    .pipe(tap(console.log));
  }

  getPaisesRegion(region: string):Observable<Country []>{

    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<Country[]>(url, {params: this.httpParams})
    .pipe(tap(console.log));
  }
}
