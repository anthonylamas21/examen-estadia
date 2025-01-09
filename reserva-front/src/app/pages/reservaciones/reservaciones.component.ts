import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservacionService } from '../../services/reservacion.service';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

@Component({
  selector: 'app-reservaciones',
  standalone: true,
  imports: [CommonModule, CalendarModule],
  templateUrl: './reservaciones.component.html',
  styleUrls: ['./reservaciones.component.css'],
})
export class ReservacionesComponent implements OnInit {
  viewDate: Date = new Date();
  events: any[] = []; // Eventos para el calendario

  constructor(private reservacionService: ReservacionService) {}

  ngOnInit(): void {
    this.loadReservaciones();
  }

  loadReservaciones() {
    this.reservacionService.getReservaciones().subscribe(
      (data) => {
        this.events = data.map((reserva: { espacio_id: any; start_time: string | number | Date; end_time: string | number | Date; }) => ({
          title: `Reservado: ${reserva.espacio_id}`,
          start: new Date(reserva.start_time),
          end: new Date(reserva.end_time),
        }));
      },
      (error) => {
        console.error('Error al cargar las reservaciones:', error);
      }
    );
  }
}
