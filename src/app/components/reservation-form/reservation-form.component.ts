import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reservation-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.scss',
})
export class ReservationFormComponent {
  loginForm!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]],
      persons: ['', [Validators.required, Validators.minLength(1)]],
    });
  }
  send() {
    alert(
      `Из формы были получены данныe ${this.loginForm.get('name')?.value} ${
        this.loginForm.get('email')?.value
      } ${this.loginForm.get('persons')?.value}
      }`
    );
  }
}
