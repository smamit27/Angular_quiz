import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  message;
  errorMessage;
  isLoginErrorMessage = false;
  constructor( private authService: AuthService,private router: Router) { }

  ngOnInit() {
  }
  authSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signup(email,password).subscribe(resdata =>{
      console.log(resdata);
      this.message = resdata;
      this.router.navigate(['login']);

    },
    errorRes =>{
      this.errorMessage = errorRes.error.error.message;
      console.log(this.errorMessage);
      this.isLoginErrorMessage = true;
    });
    form.reset();
  }

}
