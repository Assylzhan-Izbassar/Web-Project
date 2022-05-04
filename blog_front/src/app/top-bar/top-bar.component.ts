import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";
import {User} from "../models/user";
import {Router} from "@angular/router";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  currentUser?: User;
  user_id?: number;

  constructor(private router: Router,
              private authService: AuthService,
              private userService: UserService) {
    this.authService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit(): void {
  }

  getUser() {
    this.userService.getUser().subscribe(user => {
      this.user_id = user.id;
    })
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']).then();
    window.location.reload();
  }
}
