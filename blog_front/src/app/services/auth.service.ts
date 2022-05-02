import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  logged: boolean = false;

  constructor() { }

  get(): boolean | undefined {
    return this.logged;
  }

  set(val: boolean) {
    this.logged = val;
  }
}
