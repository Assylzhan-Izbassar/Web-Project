import { Injectable } from '@angular/core';
import { Post } from "../models/post";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { BaseService } from "./base.service";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient,
              private base: BaseService) { }

  createPost(title: string, content: string , user_id: number){
    return this.http.post<any>(`${environment.apiUrl}/api/posts/`, {
      "author_id": user_id,
      "title": title,
      "summary": content.substring(0, 30),
      "createdAt": this.base.currentTime(),
      "content": content
    });
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.apiUrl}/api/posts/`);
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`${environment.apiUrl}/api/posts/${id}/`);
  }

  getUserPosts(id: number) {
    return this.http.get<Post[]>(`${environment.apiUrl}/api/user/${id}/posts/`);
  }

  updatePost() {

  }

  delete(id: number) {
    return this.http.delete(`${environment.apiUrl}/api/posts/${id}/`);
  }
}
