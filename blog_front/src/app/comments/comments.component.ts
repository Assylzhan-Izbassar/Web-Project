import { Component, OnInit, Input} from '@angular/core';
import { Comment } from "../models/comment";
import { Post } from "../models/post";
import { CommentService } from "../services/comment.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments?: Comment[];
  @Input() post!: Post;
  loaded?: boolean;

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.getComments();
  }

  getComments() {
    this.loaded = false;

    this.comments = this.commentService.get();

    this.loaded = true;
  }

}
