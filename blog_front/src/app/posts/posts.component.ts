import { Component, OnInit } from '@angular/core';
import { Post } from "../models/post";
import { PostService } from "../services/post.service";
import { ActivatedRoute } from "@angular/router";
import { AuthService } from "../services/auth.service";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  // The list of posts
  posts?: Post[];

  // Data that needed to create post
  title?: string;
  content?: string;

  // For checking login
  logged?: boolean

  constructor(private route: ActivatedRoute,
              private postService: PostService,
              private authService: AuthService,
              private userService: UserService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    if(this.route.snapshot.paramMap.get('userID') == null) {
      this.postService.getPosts().subscribe(data => {
        this.posts = data;
      });
    } else {
      const id = Number(this.route.snapshot.paramMap.get('userID'));
      this.posts = this.postService.getUserPosts(id);
    }
  }

  openModal() {
    if(document.getElementById('post-create') !== null) {
      document.getElementById('post-create')!.style.display='block';
    }
  }

  cancel() {
    if(document.getElementById('post-create') !== null) {
      document.getElementById('post-create')!.style.display='none';
    }
  }

  savePost() {
    this.cancel();
  }
}
