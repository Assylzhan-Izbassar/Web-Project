import { Injectable } from '@angular/core';
import { Post } from "../models/post";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  items: Post[] = [];

  constructor(private http: HttpClient) { }

  add(post: Post) {
    this.items.push(post);
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.apiUrl}/api/posts/`);
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`${environment.apiUrl}/api/posts/${id}/`);
  }

  getUserPosts(id: number) {
      return this.items.filter((x) => x.authorID === id);
  }

  delete(id: number) {
    this.items.splice(id, 1);
  }
}
