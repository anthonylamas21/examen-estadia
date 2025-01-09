import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ReservacionesComponent } from './pages/reservaciones/reservaciones.component';
import { EspacioService } from './services/espacio.service';
import { AltaEspacioComponent } from './pages/espacios/espacios.component';
import { AltaUsuarioComponent } from './pages/usuario/usuario.component';

export const appRoutes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'reservaciones', component: ReservacionesComponent },
  { path: '**', redirectTo: '/inicio' },
  { path: 'espacios', component: AltaEspacioComponent },
  { path: 'usuarios', component: AltaUsuarioComponent },

];
