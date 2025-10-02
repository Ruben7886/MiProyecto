import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Componentes compartidos
import { AuthLayout } from '../../../../shared/components/auth-layout/auth-layout';
import { ButtonComponent } from '../../../../shared/components/button/button';
import { InputComponent } from '../../../../shared/components/Input/input';
import { HeaderNavigationComponent } from '../../../../shared/components/header-navigation/header-navigation';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterModule,
    AuthLayout,
    InputComponent,
    ButtonComponent,
        HeaderNavigationComponent, // ✅ Agregado aquí

  ],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Form Submitted!', this.loginForm.value);
      // Aquí implementas tu lógica de autenticación
    }
  }
}
