import { Component, OnInit } from '@angular/core';
import { Tag } from "../models/tag";
import { TagService } from "../services/tag.service";

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  tags?: Tag[];
  loaded?: boolean;

  constructor(private tagService: TagService) { }

  ngOnInit(): void {
    this.getTags();
  }

  getTags() {
    this.loaded = false;

    this.tags = this.tagService.get();

    this.loaded = true;
  }
}
