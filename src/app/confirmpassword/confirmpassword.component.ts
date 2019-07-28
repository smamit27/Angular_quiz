import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmpassword',
  templateUrl: './confirmpassword.component.html',
  styleUrls: ['./confirmpassword.component.css']
})
export class ConfirmpasswordComponent implements OnInit {
  errorMessageReset: string;
  occvalue: string;
  constructor(private authService:AuthService,private router: Router,private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.occvalue = this.activateRoute.snapshot.queryParams.oobCode;
    this.authService.verifyResetPassword(this.occvalue).subscribe(resdata =>{
      console.log(resdata);  
    },
    errorRes =>{
      this.errorMessageReset = errorRes.error.error.message;
      console.log(this.errorMessageReset);
    });
 }
  confirmPass(form:NgForm){
    const password = form.value.password;
    this.authService.confirmPassword(password,this.occvalue ).subscribe(resdata =>{
      console.log(resdata);
      this.router.navigate(['login']);
  
    },
    errorRes =>{
      this.errorMessageReset = errorRes.error.error.message;
      console.log(this.errorMessageReset);
    });
    form.reset();
}
}
