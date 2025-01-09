import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://127.0.0.1:8000/api'; // URL del backend Laravel

  constructor(private http: HttpClient) {}

  getSpaces(): Observable<any> {
    return this.http.get(`${this.baseUrl}/spaces`);
  }

  getReservations(): Observable<any> {
    return this.http.get(`${this.baseUrl}/reservations`);
  }

  createReservation(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/reservations`, data);
  }

  deleteReservation(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/reservations/${id}`);
  }
}
