import { Component, OnInit } from '@angular/core';
import { Post, posts } from "../models/post";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts?: Post[];
  loaded?: boolean;

  constructor() { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.loaded = false;

    this.posts = posts;
  }

}
