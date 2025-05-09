import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-registration-complete',
    imports: [
        FormsModule,
        RouterLink,
        RouterLinkActive
    ],
  templateUrl: './registration-complete.component.html',
  styleUrl: './registration-complete.component.css'
})
export class RegistrationCompleteComponent {

}
