import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  logged?: boolean;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.setLogged()
  }

  setLogged() {
    this.logged = this.authService.get();
  }

  logout() {
    this.authService.set(false);
    this.setLogged();
    window.location.reload();
  }
}
