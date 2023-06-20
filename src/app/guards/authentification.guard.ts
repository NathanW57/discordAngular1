import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from "../service/login.service";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.loginService.isUserLoggedIn()) {
      if (state.url === '/login') {
        this.router.navigateByUrl('/home');
        return false;
      }
      return true;
    } else {
      return true;
    }
  }

}
