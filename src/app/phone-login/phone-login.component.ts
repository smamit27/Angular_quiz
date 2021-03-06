import { Component, OnInit } from '@angular/core';
import { WindowService } from '../shared/window.service';
import * as firebase from 'firebase/app';

export class PhoneNumber {
  country: string;
  area: string;
  // format phone numbers as E.164
  get e164() {
    const num = this.country + this.area
    return `+${num}`
  }

}

@Component({
  selector: 'app-phone-login',
  templateUrl: './phone-login.component.html',
  styleUrls: ['./phone-login.component.css']
})
export class PhoneLoginComponent implements OnInit {
  
  windowRef: any;
  phoneNumber = new PhoneNumber()
  verificationCode: string;
  user: any;
  userData:boolean = false;
  constructor(private win: WindowService) { }
  ngOnInit() {
    this.windowRef = this.win.windowRef;
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    this.windowRef.recaptchaVerifier.render();
  }


  sendLoginCode() {
    const appVerifier = this.windowRef.recaptchaVerifier;
    const num = this.phoneNumber.e164;
    firebase.auth().signInWithPhoneNumber(num, appVerifier)
            .then(result => {
                this.windowRef.confirmationResult = result;
                this.userData = true;

            })
            .catch( error => console.log(error) );

  }

  verifyLoginCode() {
    this.windowRef.confirmationResult
                  .confirm(this.verificationCode)
                  .then(result => {
                    debugger;
                    this.user = result.user;

    })
    .catch( error => console.log(error, "Incorrect code entered?"));
  }


}
