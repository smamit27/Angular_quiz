import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  errorMessageReset: string;
  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit() {
  }
  resetPass(form:NgForm) {
    debugger;
   const email = form.value.email;
   this.authService.signreset(email).subscribe(resdata =>{
    console.log(resdata);
  },
  errorRes =>{
    debugger;
    this.errorMessageReset = errorRes.error.error.message;
    console.log(this.errorMessageReset);
    // this.isLoginErrorMessage = true;
  });
  form.reset();
  }

}
