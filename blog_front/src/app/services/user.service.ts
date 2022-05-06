import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { environment } from "../../environments/environment";
import { User } from "../models/user";
import {BehaviorSubject, Observable} from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user?: User;

  constructor(private http: HttpClient) {
    this.user = JSON.parse(localStorage.getItem('data')!);
  }

  getUser() {
    return this.http.get<User>(`${environment.apiUrl}/api/user/`)
      .pipe(map(user => {
        localStorage.setItem('data', JSON.stringify(user));
        return user;
      }));
  }
}
