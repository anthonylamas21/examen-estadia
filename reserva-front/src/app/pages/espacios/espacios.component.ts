import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alta-espacio',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // Agrega ReactiveFormsModule
  templateUrl: './espacios.component.html',
  styleUrls: ['./espacios.component.css']
})
export class AltaEspacioComponent {
  espacioForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.espacioForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(255)]],
      capacidad: ['', [Validators.required, Validators.min(1)]],
      disponibilidad: [false],
    });
  }

  onSubmit() {
    if (this.espacioForm.valid) {
      console.log('Espacio creado:', this.espacioForm.value);
    } else {
      console.error('Formulario inválido');
    }
  }
}
