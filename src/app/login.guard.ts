import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './services/user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.userService.IsLogedIn){
      return true;
    }
    else{
      let totalPath = '';
      route.url.forEach((element,index)=>{
        totalPath += element.path+'/';
      })
      this.userService.returnUrl = totalPath;
      this.router.navigate(['login']);
      console.log(this.userService.returnUrl);
      return false;
    }
  }  
}
