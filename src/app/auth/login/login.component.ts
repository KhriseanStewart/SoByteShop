import { user } from 'rxfire/auth';
import { AuthService } from './../core/auth.service';
import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email: string = '';
  password: string = '';
  errorMessage: String = '';

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {

  }
  tryLogin() {
     if (!this.email || !this.password) {
      this.errorMessage = 'Please enter email and password.';
      return;
     }
    this.authService.doLogin({ email: this.email, password: this.password })
      .then(res => {
        console.log(res);
        this.router.navigate(['/profile']);
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
      })
    }


}
