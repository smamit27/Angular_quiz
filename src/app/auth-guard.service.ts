import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {FakeService} from './fake.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  constructor(private fakeService: FakeService,private router: Router) {}
canActivate(route:ActivatedRouteSnapshot,
            state:RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean {
              return this.fakeService.isAuthorised().then((authenticated: boolean)=>{
                if(authenticated){
                  return true;
                }
                else{

                  this.router.navigate(['login']);
                }
              })
            }

}
