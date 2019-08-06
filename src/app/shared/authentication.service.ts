import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {auth}  from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private angularFireAuth: AngularFireAuth ) { }

  doGoogleLogin(){
    this.angularFireAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider());
}

}
