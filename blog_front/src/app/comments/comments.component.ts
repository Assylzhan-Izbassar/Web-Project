import { Component, OnInit, Input} from '@angular/core';
import { Comment, comments} from "../models/comment";
import {Post} from "../models/post";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments?: Comment[];
  @Input() post!: Post;
  loaded?: boolean;

  constructor() { }

  ngOnInit(): void {
    this.getComments();
  }

  getComments() {
    this.loaded = false;

    this.comments = comments;

    this.loaded = true;
  }

}
