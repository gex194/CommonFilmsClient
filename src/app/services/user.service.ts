import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import User from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient)
  private baseUrl: string = "http://localhost:5250/api/User/"

  getUserById(id: string | null) {
    return this.http.get<User>(this.baseUrl + id);
  }
}
