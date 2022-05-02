import { Injectable } from '@angular/core';
import { Comment, comments } from "../models/comment";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  comments: Comment[] = comments;

  constructor() { }

  get() {
    return this.comments;
  }
}
