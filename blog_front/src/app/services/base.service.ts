import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor() { }

  currentTime(): string {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    let hours = today.getHours();
    let min = today.getMinutes();

    return yyyy + '-' + mm + '-' + dd + 'T' + hours + ':' + min;
  }
}
