import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  user = {
    email: '',
    password: '',
  };

  constructor(
    private authServices: AuthService,
    private router: Router
    ) {}

  ngOnInit(): void {}

  signIn() {
    this.authServices.SignIn(this.user)
      .subscribe({
        next: res => {
          console.log(res);
          localStorage.setItem("token", res.token)
          this.router.navigate(["/private"]);
        },
        error: err => console.error(err)
      })
  }
}
