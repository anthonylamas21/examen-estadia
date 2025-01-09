import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCalendarModule } from '../../../app/shared/modules/calendar/calendar.module'; // Ajusta la ruta correcta
import { ReservacionService } from '../../services/reservacion.service';

interface Event {
  title: string;
  start: Date;
  end: Date;
  meta: any;
}

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, CustomCalendarModule],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  viewDate: Date = new Date();
  events: Event[] = []; // Eventos del calendario

  constructor(private reservacionService: ReservacionService) {}

  ngOnInit(): void {
    this.cargarReservaciones(); // Cargar reservaciones al iniciar
  }

  // Función para cargar reservaciones desde el backend
  cargarReservaciones(): void {
    this.reservacionService.getReservaciones().subscribe(
      (reservaciones) => {
        this.events = reservaciones.map((reservacion: any) => ({
          title: `Reservado: Espacio ${reservacion.espacio_id}`,
          start: new Date(reservacion.start_time),
          end: new Date(reservacion.end_time),
          meta: reservacion, // Información adicional de la reservación
        }));
      },
      (error) => {
        console.error('Error al cargar reservaciones', error);
      }
    );
  }

  // Función para manejar clic en un día del calendario
  onDayClick(event: any): void {
    console.log('Día seleccionado:', event);
    alert(`Día seleccionado: ${event.date}`);
  }
}
