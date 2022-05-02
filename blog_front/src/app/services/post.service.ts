import { Injectable } from '@angular/core';
import {Post, posts} from "../models/post";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  items: Post[] = posts;

  constructor() { }

  add(post: Post) {
    this.items.push(post);
  }

  get(): Post[]{
    return this.items;
  }

  getUserPosts(id: number) {
      return this.items.filter((x) => x.authorID === id);
  }

  getPost(id: number) {
    return this.items.find((x) => x.id === id);
  }

  delete(id: number) {
    this.items.splice(id, 1);
  }
}
