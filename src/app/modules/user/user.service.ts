import { Injectable } from '@angular/core';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseApi: string = 'https://localhost:7218';

  constructor(private _http: HttpClient) { }


  login(name: string | undefined, password: string | undefined, course: string | undefined): Observable<User> {
    return this._http.post<User>(`${this.baseApi}/user/login`, { name: name, password: password });
  }

  register(user: User): Observable<User> {
    return this._http.post<User>(`${this.baseApi}/user/register`, user);
  }
}
