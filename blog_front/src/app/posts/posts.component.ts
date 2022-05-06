import { Component, OnInit } from '@angular/core';
import { Post } from "../models/post";
import { PostService } from "../services/post.service";
import { ActivatedRoute } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { UserService } from "../services/user.service";
import { User } from "../models/user";
import {Tag} from "../models/tag";
import {TagService} from "../services/tag.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  // The list of posts
  posts?: Post[];
  currentUser: User;
  // user: User;

  myPosts: boolean = false;

  // Data that needed to create post
  title?: string;
  content?: string;

  // For checking login
  logged?: boolean

  // For tags
  tags?: Tag[];

  constructor(private route: ActivatedRoute,
              private postService: PostService,
              private authService: AuthService,
              private userService: UserService,
              private tagServices: TagService) {
    this.currentUser = authService.currentUserValue;
    // this.user = userService.user
  }

  ngOnInit(): void {
    this.getPosts();
    this.getTags();
    this.userService.getUser().subscribe(data => {
    });
  }

  getTags() {
    this.tagServices.getTags().subscribe(data => {
      this.tags = data;
    });
  }

  getPosts() {
    if(this.route.snapshot.paramMap.get('user_id') == null) {
      this.postService.getPosts().subscribe(data => {
        this.posts = data;
      });
    } else {
      this.myPosts = true;
      const id = Number(this.route.snapshot.paramMap.get('user_id'));
      this.postService.getUserPosts(id).subscribe(data => {
        this.posts = data;
      })
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
    this.postService.createPost(this.title!, this.content!, this.userService.user!.id).subscribe(data => {
      this.title = "";
      this.content = "";
    });
    window.location.reload();
  }

  delete(id: number) {
    this.postService.delete(id).subscribe();
    window.location.reload();
  }
}
