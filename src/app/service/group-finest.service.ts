import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Group} from "../model/Group";
import {environnement} from "../environnements/Environnement";
import {BehaviorSubject} from "rxjs";
import {GroupFinest} from "../model/GroupFinest";

@Injectable({
  providedIn: 'root'
})
export class GroupFinestService {

  public _group: BehaviorSubject<GroupFinest[]> = new BehaviorSubject<GroupFinest[]>([]);

  constructor(private http: HttpClient) { }

  public getAllGroupsFinest() {
    const jwt = localStorage.getItem('jwt');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwt}`);

    return this.http.get<GroupFinest[]>(environnement.serveurUrl + 'groupsDetail', { headers }).subscribe(
      (groups: GroupFinest[]) => {
        this._group.next(groups);
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }
}
