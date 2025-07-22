import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email: string = '';
  password: string = '';
  authpassword: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {

  }
  tryRegister() {
    if (this.password == this.authpassword) {
      this.authService.doRegister({ email: this.email, password: this.password })
        .then(res => {
          console.log(res);
          this.router.navigate(['/profile']);
        }, err => {
          console.log(err);
          this.errorMessage = err.message;
        })
    } else {
      this.errorMessage = 'Incorrect Passwords';
    }
  }

}
