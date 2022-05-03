import { Injectable } from '@angular/core';
import { Comment } from "../models/comment";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  comments?: Comment[];

  constructor() { }

  get() {
    return this.comments;
  }
}
