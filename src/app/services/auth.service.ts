import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import LoginInput from '../interfaces/LoginInput';
import RegisterInput from '../interfaces/RegisterInput';
import User from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = "http://localhost:5250/api/Auth/"
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
    return this.http.post<string>(this.baseUrl + 'login',
      {email: loginInput.email, password: loginInput.password})
  }

  register(registerInput: RegisterInput) {
    return this.http.post<User>(this.baseUrl + "register", {...registerInput});
  }

  setCurrentUser(user: User) {
    this.currentUser = user;
  }
}
