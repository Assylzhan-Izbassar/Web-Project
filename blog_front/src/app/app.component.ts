import {Component, EventEmitter, Output} from '@angular/core';
import {posts} from "./models/post";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'blog_front';
}
