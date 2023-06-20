import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Group} from "../../model/Group";
import {environnement} from "../../environnements/Environnement";
import {BehaviorSubject, Observable, Subject, tap} from "rxjs";
import {GroupFinest} from "../../model/GroupFinest";

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  public _group: BehaviorSubject<Group[]> = new BehaviorSubject<Group[]>([]);


  groupAdded = new Subject<void>();

  deletedGroup = new Subject<void>();


  constructor(private http: HttpClient) {}



  getGroups(): Observable<Group[]> {
    return this.http.get<Group[]>(environnement.serveurUrl + 'groups');
  }

  public getGroupById(id: number | undefined): Observable<GroupFinest> {
    const jwt = localStorage.getItem('jwt');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwt}`);

    return this.http.get<GroupFinest>(environnement.serveurUrl + 'group/' + id, { headers });
  }

  public addGroup(group: Group): Observable<Group> {

    return this.http.post<Group>(environnement.serveurUrl + 'groups', group).pipe(
      tap(() => {
        this.groupAdded.next();
      }
    ));
  }

  public deleteGroup(id: number): Observable<void> {

    return this.http.delete<void>(environnement.serveurUrl + 'groups/' + id).pipe(
      tap(() => {
        this.deletedGroup.next();
      }
    ));
  }

}
