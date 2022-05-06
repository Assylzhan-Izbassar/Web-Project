import { Injectable } from '@angular/core';
import { Tag } from "../models/tag";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private http: HttpClient) {
  }

  getTags(): Observable<Tag[]>{
    return this.http.get<Tag[]>(`${environment.apiUrl}/api/tags/`)
  }
}
