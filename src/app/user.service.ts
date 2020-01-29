import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from './travellers';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://jsonplaceholder.typicode.com/users'

  constructor(private _http: HttpClient) { }

  getUsers() {
    return this._http.get<AppComponent[]>(this.apiUrl)
  }
}
