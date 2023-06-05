import { Injectable } from '@angular/core';
import {environnement} from "../environnements/Environnement";
import {User} from "../model/User";
import {BehaviorSubject, Observable, Subject, tap} from "rxjs";
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

  userAdded = new Subject<void>();

  userDeleted = new Subject<void>();


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


  public userDeleteById(id: number | undefined): Observable<User> {
    const jwt = localStorage.getItem('jwt');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwt}`);
    return this.http.delete<User>(`${environnement.serveurUrl}user/${id}`, { headers }).pipe(
      tap(() => {
        this.userDeleted.next(); // Emit an event to say that a user was deleted
      }
    ));
  }

  public addingUser(user: User): Observable<User> {
    const jwt = localStorage.getItem('jwt');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwt}`);
    return this.http.post<User>(`${environnement.serveurUrl}users`, user, { headers }).pipe(
      tap(() => {
        this.userAdded.next(); // Emit an event to say that a user was added
      })
    );
  }
}
