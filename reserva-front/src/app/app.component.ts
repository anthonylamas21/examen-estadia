import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <header>
      <h1>Sistema de Reservaciones</h1>
    </header>
    <nav>
      <a routerLink="/inicio">Inicio</a>
      <a routerLink="/reservaciones">Reservaciones</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
