import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Group} from "../model/Group";
import {environnement} from "../environnements/Environnement";
import {BehaviorSubject, Observable} from "rxjs";
import {GroupFinest} from "../model/GroupFinest";

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  public _group: BehaviorSubject<Group[]> = new BehaviorSubject<Group[]>([]);

  constructor(private http: HttpClient) {}


  public getAllGroups() {
    const jwt = localStorage.getItem('jwt');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwt}`);

    return this.http.get<Group[]>(environnement.serveurUrl + 'groups', { headers }).subscribe(
      (groups: Group[]) => {
        this._group.next(groups);
      },
      (error) => {
      }
    );
  }

  public getGroupById(id: number | undefined): Observable<GroupFinest> {
    const jwt = localStorage.getItem('jwt');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwt}`);

    return this.http.get<GroupFinest>(environnement.serveurUrl + 'group/' + id, { headers });
  }

}
