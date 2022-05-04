import { Component, OnInit } from '@angular/core';
import { Post } from "../models/post";
import { PostService } from "../services/post.service";
import { ActivatedRoute } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { UserService } from "../services/user.service";
import { User } from "../models/user";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  // The list of posts
  posts?: Post[];
  currentUser?: User;

  // Data that needed to create post
  title?: string;
  content?: string;

  // For checking login
  logged?: boolean

  constructor(private route: ActivatedRoute,
              private postService: PostService,
              private authService: AuthService,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.getPosts();
    this.getUser();
  }

  getUser() {
    this.userService.getUser().subscribe(data => {
      this.currentUser = data;
    });
  }

  getPosts() {
    if(this.route.snapshot.paramMap.get('user_id') == null) {
      this.postService.getPosts().subscribe(data => {
        this.posts = data;
      });
    } else {
      const id = Number(this.route.snapshot.paramMap.get('user_id'));
      // this.posts = this.postService.getUserPosts(id);
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
    this.postService.createPost(this.title!, this.content!, this.currentUser!.id);
  }
}
