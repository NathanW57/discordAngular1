import { Injectable } from '@angular/core';
import {environnement} from "../environnements/Environnement";
import {User} from "../model/User";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {GroupFinest} from "../model/GroupFinest";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserById(id: number | undefined): Observable<User> {
    const jwt = localStorage.getItem('jwt');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwt}`);
    return this.http.get<User>(`${environnement.serveurUrl}userFinest/${id}`, { headers });
  }
}
