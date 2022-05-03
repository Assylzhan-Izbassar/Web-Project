import { Component, OnInit } from '@angular/core';
import { Post } from "../models/post";
import { PostService } from "../services/post.service";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  post?: Post;
  loaded?: boolean;
  saving?: boolean;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private postService: PostService) { }

  ngOnInit(): void {
    this.getPost()
  }

  getPost() {
    this.loaded = false;

    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.postService.getPost(id).subscribe(data => {
      this.post = data;
    });

    this.loaded = true;
  }

  goBack() {
    this.location.back();
  }
}
