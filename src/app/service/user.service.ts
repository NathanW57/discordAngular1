import { Injectable } from '@angular/core';
import {environnement} from "../environnements/Environnement";
import {User} from "../model/User";
import {BehaviorSubject, catchError, Observable, Subject, tap, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {UserGroupFinest} from "../model/UserGroupFinest";
import {Channel} from "../model/Channel";

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
    return this.http.get<User>(`${environnement.serveurUrl}userFinest/${id}`);
  }



  public getAllUser(): Observable<UserGroupFinest[]> {
    return this.http.get<UserGroupFinest[]>(`${environnement.serveurUrl}users`).pipe(
      catchError(this.handleError)
    );
  }



  public userDeleteById(id: number | undefined): Observable<User> {
    return this.http.delete<User>(`${environnement.serveurUrl}user/${id}`).pipe(
      tap(() => {
        this.userDeleted.next();
      }
    ));
  }

  public getAllChannelByIdUser(id: number | undefined): Observable<Channel[]> {
    return this.http.get<UserGroupFinest[]>(`${environnement.serveurUrl}channel/${id}/members`).pipe(
      catchError(this.handleError)
    );
  }

  public addingUser(user: User): Observable<User> {
    return this.http.post<User>(`${environnement.serveurUrl}users`, user).pipe(
      tap(() => {
        this.userAdded.next();
      })
    );
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Une erreur est survenue :', error.error.message);
    } else {
      console.error(
        `Le serveur a renvoyé le code d'état ${error.status}, ` +
        `corps de la réponse: ${error.error}`);
    }
    return throwError('Quelque chose a mal tourné, veuillez réessayer plus tard.');
  }

}
