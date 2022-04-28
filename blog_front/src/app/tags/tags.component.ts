import { Component, OnInit } from '@angular/core';
import {Tag, tags} from "../models/tag";

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  tags?: Tag[];
  loaded?: boolean;

  constructor() { }

  ngOnInit(): void {
    this.getTags();
  }

  getTags() {
    this.loaded = false;

    this.tags = tags;

    this.loaded = true;
  }
}
