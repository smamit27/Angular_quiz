import { Component, OnInit } from '@angular/core';
import {NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FakeService } from '../fake.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessageLogin:string;
  isLoginErrorMessage:boolean;
  constructor( private authService: AuthService,private router: Router,private fakeService: FakeService) { }

  ngOnInit() {
  }
  authLoginSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signin(email,password).subscribe(resdata =>{
      this.fakeService.isLogin();
      this.router.navigate(['welcome']);

    },
    errorRes =>{
      this.errorMessageLogin = errorRes.error.error.message;
      console.log(this.errorMessageLogin);
      this.isLoginErrorMessage = true;
    });
    form.reset();
  }
  resetPassword(){
    this.router.navigate(['resetPassword'])
  }
  signup() {
    this.router.navigate(['signup']);
  }
}
