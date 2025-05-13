import { Routes } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {RegistrationComponent} from './pages/registration/registration.component';
import {RegistrationCompleteComponent} from './pages/registration-complete/registration-complete.component';
import {UserProfileComponent} from './pages/user-profile/user-profile.component';
import {MoviesComponent} from './pages/movies/movies.component';

export const routes: Routes = [
  {path: "", redirectTo: "login", pathMatch: "full"},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegistrationComponent},
  {path: "registration-complete", component: RegistrationCompleteComponent},
  {path: "user/:id", component: UserProfileComponent},
  {path: "movies", component: MoviesComponent}
];
