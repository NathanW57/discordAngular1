import { Injectable } from '@angular/core';
import {environnement} from "../environnements/Environnement";
import {User} from "../model/User";
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {GroupFinest} from "../model/GroupFinest";
import {Group} from "../model/Group";
import {UserGroupFinest} from "../model/UserGroupFinest";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public _user: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  public _userFinest: BehaviorSubject<UserGroupFinest[]> = new BehaviorSubject<UserGroupFinest[]>([]);

  constructor(private http: HttpClient) { }

  getUserById(id: number | undefined): Observable<User> {
    const jwt = localStorage.getItem('jwt');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwt}`);
    return this.http.get<User>(`${environnement.serveurUrl}userFinest/${id}`, { headers });
  }



  public getAllUser(): Observable<UserGroupFinest[]> {
    const jwt = localStorage.getItem('jwt');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwt}`);
    return this.http.get<UserGroupFinest[]>(`${environnement.serveurUrl}users`, { headers });
  }

}
