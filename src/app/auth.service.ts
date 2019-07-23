import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface AuthMod {
  kind :string,
  idToken:	string,	
  email :	string,	
  refreshToken :	string,
  expiresIn	: string,
  localId	: string
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signup(email: string, password: string) {
    return this.http.post<AuthMod>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDTQiG3dA0EADCgkpJ3PN3P5KZQso7JIo0',{
      email: email,
      password: password,
      returnSecureToken: true
    })
  }
}
