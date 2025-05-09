import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {AuthService} from '../../services/auth.service';
import {RegistrationFormComponent} from '../../components/registration-form/registration-form.component';

@Component({
  selector: 'app-registration',
  imports: [
    FormsModule,
    RegistrationFormComponent
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css',
  providers: [AuthService]
})
export class RegistrationComponent {
}
