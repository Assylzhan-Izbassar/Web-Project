import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'blog_front';

  logged = true;

  logout() {
    this.logged = false;
    // window.location.reload()
  }

  getNotification(value: boolean) {
    this.logged = value;
  }
}
