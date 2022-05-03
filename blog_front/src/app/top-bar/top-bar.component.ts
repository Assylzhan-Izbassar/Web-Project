import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";
import {User} from "../models/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  currentUser?: User;

  constructor(private router: Router,
              private authService: AuthService) {
    this.authService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']).then();
    window.location.reload();
  }
}
