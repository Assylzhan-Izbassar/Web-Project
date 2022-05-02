import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Post, posts } from "../models/post";
import { PostService } from "../services/post.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts?: Post[];

  constructor(private route: ActivatedRoute,
              private postService: PostService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {

    if(this.route.snapshot.paramMap.get('userID') == null) {
      this.posts = this.postService.get();
    } else {
      const id = Number(this.route.snapshot.paramMap.get('userID'));
      this.posts = this.postService.getUserPosts(id);
    }
  }
}
