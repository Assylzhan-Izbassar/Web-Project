import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm?: FormGroup;
  loading = false;
  submitted = false;
  returnUrl?: string;
  error = '';

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService) {
    if (this.authService.currentUserValue) {
      this.router.navigate(['/']).then();
    }
  }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm!.controls; }

  onSubmit() {

    let username = this.f['username'].value;
    let password = this.f['password'].value;

    this.submitted = true;

    if(this.loginForm?.invalid) {
      return;
    }

    this.loading = true;
    this.authService.login(username, password)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]).then();
        },
        error => {
          this.error = error;
          this.loading = false;
        }
      )
  }
}
