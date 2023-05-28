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
        this.router.navigateByUrl('/home'); // Rediriger de /login à /home si l'utilisateur est déjà connecté
        return false;
      }
      return true; // Utilisateur connecté, autoriser la navigation
    } else {
      return true; // Utilisateur non connecté, autoriser la navigation normale vers /login
    }
  }

}
