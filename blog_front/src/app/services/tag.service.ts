import { Injectable } from '@angular/core';
import { Tag } from "../models/tag";

@Injectable({
  providedIn: 'root'
})
export class TagService {

  tags: Tag[] = []

  constructor() { }

  get(){
    return this.tags;
  }
}
