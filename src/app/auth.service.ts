import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface AuthSign{
  kind :string,
  idToken:	string,	
  email :	string,	
  refreshToken :	string,
  expiresIn	: string,
  localId	: string,
  registered?: boolean
};
interface ResetPassword {
  email :	string,	
  requestType: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signup(email: string, password: string) {
    return this.http.post<AuthSign>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDTQiG3dA0EADCgkpJ3PN3P5KZQso7JIo0',{
      email: email,
      password: password,
      returnSecureToken: true
    })
  }
  signin(email: string, password: string) {
    return this.http.post<AuthSign>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDTQiG3dA0EADCgkpJ3PN3P5KZQso7JIo0',{
      email: email,
      password: password,
      returnSecureToken: true
    })
  }
  signreset(email: string){
    return this.http.post<ResetPassword>('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDTQiG3dA0EADCgkpJ3PN3P5KZQso7JIo0',{
      email: email,
      requestType:"PASSWORD_RESET"
    })
  }
  verifyResetPassword(oobCode: string) {
    debugger;
    return this.http.post<ResetPassword>('https://identitytoolkit.googleapis.com/v1/accounts:resetPassword?key=AIzaSyDTQiG3dA0EADCgkpJ3PN3P5KZQso7JIo0',{
      oobCode: oobCode
    })
  }
  confirmPassword(newpassword: string,occ:string){
    debugger;
    return this.http.post<ResetPassword>('https://identitytoolkit.googleapis.com/v1/accounts:resetPassword?key=AIzaSyDTQiG3dA0EADCgkpJ3PN3P5KZQso7JIo0',{
      oobCode: occ,
      newPassword: newpassword
    })

  }
}
