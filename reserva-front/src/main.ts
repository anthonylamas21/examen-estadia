import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app/app.routes';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes),
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })),
  ],
  
}).catch((err) => console.error(err));
bootstrapApplication(AppComponent, {
  providers: [provideRouter(appRoutes), importProvidersFrom(HttpClientModule)],
}).catch((err) => console.error(err));
