import { Component } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import LoginInput from '../../interfaces/LoginInput';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
import {TokenService} from '../../services/token.service';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule, RouterLink, RouterLinkActive],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
  providers: [AuthService]
})
export class LoginFormComponent {
  public email = new FormControl('');
  public password = new FormControl('');
  public error = '';
  constructor(private _authService: AuthService, private _tokenService: TokenService, private _router: Router) { }

  login() {
    if (!this.validate()) {
      this.error = 'Invalid email or password';
      return;
    }
    const loginInput : LoginInput = {
      email: this.email.value,
      password: this.password.value
    }
    this._authService.login(loginInput).subscribe((response:any) => {
      this._tokenService.setToken(response.token);
      this._authService.setCurrentUser(response.user);
      this._router.navigate(['user', response.user.id]);
    });
  }

  validate() {
    return this.email.valid && this.password.valid;
  }
}
