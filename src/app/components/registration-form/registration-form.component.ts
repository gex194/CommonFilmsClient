import { Component } from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {RouterLink, RouterLinkActive, Router} from '@angular/router';
import RegisterInput from '../../interfaces/RegisterInput';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-registration-form',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.css',
  providers: [AuthService]
})
export class RegistrationFormComponent {
  public name = new FormControl('');
  public email = new FormControl('');
  public password = new FormControl('');
  public confirmPassword = new FormControl('');
  public error = '';
  constructor(private _authService: AuthService, private _router: Router) { }

  register() {
    const registerInput: RegisterInput = {
      name: this.name.value,
      email: this.email.value,
      password: this.password.value,
      confirmPassword: this.confirmPassword.value,
    }
    this._authService.register(registerInput).subscribe(user => {
      this._authService.setCurrentUser(user);
      this._router.navigate(['/registration-complete']);
    });
  }
}
