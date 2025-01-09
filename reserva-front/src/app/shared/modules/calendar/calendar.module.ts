import { NgModule } from '@angular/core';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  exports: [CalendarModule], // Exportamos para que esté disponible en otros módulos o componentes
})
export class CustomCalendarModule {}
