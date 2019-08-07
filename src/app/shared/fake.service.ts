import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeService {
  loggedIn = false;

  constructor() { }
  isAuthorised() {
    const promise = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve(this.loggedIn);
      },700);
    }
    );
    return promise;
  }
  isLogin() {
    this.loggedIn = true;
  }
  isLogout() {
    this.loggedIn = false;
  }
}
