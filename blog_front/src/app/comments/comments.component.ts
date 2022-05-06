import { Component, OnInit, Input} from '@angular/core';
import { Comment } from "../models/comment";
import { Post } from "../models/post";
import { CommentService } from "../services/comment.service";
import {UserService} from "../services/user.service";
import { User } from "../models/user";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments?: Comment[];
  @Input() post!: Post;
  loaded?: boolean;

  currentUser: User;

  // Comment fields
  title: string = "";
  content: string = "";

  constructor(private commentService: CommentService,
              private authService: AuthService) {
    this.currentUser = authService.currentUserValue
  }

  ngOnInit(): void {
    this.getComments();
  }

  getComments() {
    this.loaded = false;

    this.commentService.getComments(this.post.id).subscribe(data => {
      this.comments = data;
      this.loaded = true;
    })
  }

  submit() {
    this.commentService.createComment(this.title, this.content, this.post.id).subscribe(data => {
      this.title = "";
      this.content = "";
      window.location.reload();
    });
  }

}
