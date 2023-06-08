import { Injectable } from '@angular/core';
import {environnement} from "../environnements/Environnement";
import {User} from "../model/User";
import {BehaviorSubject, catchError, Observable, Subject, tap, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
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
        this.userDeleted.next(); // Emit an event to say that a user was deleted
      }
    ));
  }

  public addingUser(user: User): Observable<User> {
    return this.http.post<User>(`${environnement.serveurUrl}users`, user).pipe(
      tap(() => {
        this.userAdded.next(); // Emit an event to say that a user was added
      })
    );
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Une erreur côté client ou un problème de réseau. Traitez-le en conséquence.
      console.error('Une erreur est survenue :', error.error.message);
    } else {
      // Le serveur a renvoyé un code de statut d'échec.
      console.error(
        `Le serveur a renvoyé le code d'état ${error.status}, ` +
        `corps de la réponse: ${error.error}`);
    }
    // Retourner un observable avec un message d'erreur orienté utilisateur
    return throwError('Quelque chose a mal tourné, veuillez réessayer plus tard.');
  }

}
