import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  user = {
    email: '',
    password: '',
  };

  constructor(
    private authService: AuthService,
    private router: Router
    ) {}

  ngOnInit(): void {}

  signUp() {
    this.authService.singUp(this.user).subscribe({
      next: (res) => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(["/private"]);
      },
      error: (err) => console.error(err),
      complete: () => console.info('Completo'),
    });
  }
}
