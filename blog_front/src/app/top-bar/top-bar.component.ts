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

  user?: User;
  isCurrentUser?: User;

  constructor(private router: Router,
              private authService: AuthService,
              private userService: UserService) {
    this.user = this.userService.user!;
  }

  ngOnInit(): void {
    this.isCurrentUser = this.authService.currentUserValue;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']).then();
    window.location.reload();
  }
}
