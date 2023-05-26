import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {User} from "../model/User";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public _userConnected : BehaviorSubject<User | null> =
    new BehaviorSubject<User | null>(null);
  constructor(private http:HttpClient , private router :Router) {
      this.updateUserConnected();
  }


  updateUserConnected() {
    const jwt = localStorage.getItem('jwt');

    if (jwt != null) {
      const data: string = jwt.split('.')[1];
      const json = window.atob(data);
      const userData = JSON.parse(json);

      const roleNames = userData.role.map((role: any) => role.name).join(',');

      const user: User = {
        email: userData.sub,
        lastname: userData.lastname,
        firstname: userData.firstname,
        role: roleNames.split(',')
      };

      this._userConnected.next(user);
    } else {
      this._userConnected.next(null);
    }
  }



  connexion(user : User) : Observable<string> {

    return this.http
      .post("http://localhost:8081/connexion",
        user,
        {responseType: "text"}
      )
  }


  disconnect(){
    localStorage.removeItem("jwt");

    this._userConnected.next(null);

    this.router.navigateByUrl("/login");
  }

  isUserLoggedIn(): boolean {
    return this._userConnected.value !== null;
  }

  getUser(): User | null {
    return this._userConnected.value;
  }

}
