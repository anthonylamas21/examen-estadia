import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EspacioService {
  private apiUrl = 'http://127.0.0.1:8000/api/espacios';

  constructor(private http: HttpClient) {}

  crearEspacio(espacio: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, espacio);
  }
}
