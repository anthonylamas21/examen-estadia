import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alta-usuario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // Importar aquí
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class AltaUsuarioComponent {
  usuarioForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.usuarioForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(255)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() {
    if (this.usuarioForm.valid) {
      console.log('Formulario enviado:', this.usuarioForm.value);
    } else {
      console.error('Formulario inválido');
    }
  }
}
