import { Injectable } from '@angular/core';
import {environnement} from "../environnements/Environnement";
import {User} from "../model/User";
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {GroupFinest} from "../model/GroupFinest";
import {Group} from "../model/Group";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public _user: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);

  constructor(private http: HttpClient) { }

  getUserById(id: number | undefined): Observable<User> {
    const jwt = localStorage.getItem('jwt');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwt}`);
    return this.http.get<User>(`${environnement.serveurUrl}userFinest/${id}`, { headers });
  }



  public getAllUser() {
    const jwt = localStorage.getItem('jwt');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwt}`);
    return this.http.get<User[]>(`${environnement.serveurUrl}users`, { headers }).subscribe(
      (users : User[]) => {
        this._user.next(users);
      },
      error => {}
        );
      }

}
