import { Injectable } from '@angular/core';
import { Tag, tags } from "../models/tag";

@Injectable({
  providedIn: 'root'
})
export class TagService {

  tags: Tag[] = tags

  constructor() { }

  get(){
    return this.tags;
  }
}
