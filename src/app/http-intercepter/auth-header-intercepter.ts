import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class AuthHeaderIntercepter implements HttpInterceptor{
        intercept(request:HttpRequest<any>,next:HttpHandler){
            console.log("Request"+ request.url);
            const authToken = 'Hello World';
            const authData = request.clone({
                setHeaders:{
                    Authorization: authToken
                }
            })
            return next.handle(authData);
        }
} 