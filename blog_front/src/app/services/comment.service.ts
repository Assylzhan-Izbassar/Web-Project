import { Injectable } from '@angular/core';
import { Comment } from "../models/comment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  getComments(post_id: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${environment.apiUrl}/api/posts/${post_id}/comments/`);
  }
}
