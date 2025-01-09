import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservacionService {
  private apiUrl = 'http://127.0.0.1:8000/api'; // URL de la API de Laravel

  constructor(private http: HttpClient) {}

  // Obtener todas las reservaciones
  getReservaciones(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/reservaciones`);
  }
}
