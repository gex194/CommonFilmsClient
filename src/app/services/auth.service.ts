import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import LoginInput from '../interfaces/LoginInput';
import RegisterInput from '../interfaces/RegisterInput';
import User from '../interfaces/User';
import {baseUrl} from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url: string = `${baseUrl}/api/Auth/`
  private currentUser: User = {
    name: '',
    email: '',
    watchList: [],
    friendList: [],
    id: 0,
    password: '',
    isAdmin: false,
    isDeleted: false
  }
  private http = inject(HttpClient)


  login(loginInput: LoginInput) {
    return this.http.post<string>(this.url + 'login',
      {email: loginInput.email, password: loginInput.password})
  }

  register(registerInput: RegisterInput) {
    return this.http.post<User>(this.url + "register", {...registerInput});
  }

  setCurrentUser(user: User) {
    this.currentUser = user;
  }
}
