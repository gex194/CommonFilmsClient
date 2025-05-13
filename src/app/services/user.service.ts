import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import User from '../interfaces/User';
import {baseUrl} from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient)
  private url: string = `${baseUrl}/api/User/`

  getUserById(id: string | null) {
    return this.http.get<User>(this.url + id);
  }
}
