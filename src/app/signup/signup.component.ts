import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  message: any;
  errorMessage: string;
  isLoginErrorMessage = false;
  loaderShow = false;
  constructor( private authService: AuthService,private router: Router) { }
  ngOnInit() { }
  authSubmit(form: NgForm) {
    this.loaderShow = true;
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signup(email,password).subscribe(resdata =>{
      console.log(resdata);
      this.loaderShow = false;
      this.message = resdata;
      this.router.navigate(['login']);

    },
    errorRes =>{
      this.errorMessage = errorRes.error.error.message;
      this.loaderShow = false;
      console.log(this.errorMessage);
      this.isLoginErrorMessage = true;
    });
    form.reset();
  }
  loginForm(){
    this.router.navigate(['login']);


  }

}
