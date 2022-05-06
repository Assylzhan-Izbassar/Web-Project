import { Component, OnInit } from '@angular/core';
import { Post } from "../models/post";
import { PostService } from "../services/post.service";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import {User} from "../models/user";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  post?: Post;
  loaded?: boolean;
  saving?: boolean;
  user?: User;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private postService: PostService,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.getPost();
  }


  getPost() {
    this.loaded = false;

    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.postService.getPost(id).subscribe(data => {
      this.loaded = true;
      this.post = data;
    });
  }

  goBack() {
    this.location.back();
  }
}
