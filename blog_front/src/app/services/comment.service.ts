import { Injectable } from '@angular/core';
import { Comment } from "../models/comment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { BaseService } from "./base.service";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient,
              private base: BaseService) { }

  getComments(post_id: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${environment.apiUrl}/api/posts/${post_id}/comments/`);
  }

  createComment(title: string, content: string, post_id: number): Observable<Comment> {
    return this.http.post<Comment>(`${environment.apiUrl}/api/comments/`, {
      "title": title,
      "publishedAt": this.base.currentTime(),
      "content": content,
      "post_id": post_id
    });
  }
}
