import { Injectable } from '@angular/core';
import { Post } from "../models/post";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  currentTime(): string {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    let hours = today.getHours();
    let min = today.getMinutes();

    return yyyy + '-' + mm + '-' + dd + 'T' + hours + ':' + min;
  }

  createPost(title: string, content: string , user_id: number){
    return this.http.post<any>(`${environment.apiUrl}/api/posts/`, {
      "author_id": user_id,
      "title": title,
      "summary": content.substring(0, 30),
      "createdAt": this.currentTime(),
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


  delete(id: number) {
    // this.items.splice(id, 1);
  }
}
