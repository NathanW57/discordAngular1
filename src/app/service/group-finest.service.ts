import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { GroupFinest } from "../model/GroupFinest";
import { environnement } from "../environnements/Environnement";
import {Group} from "../model/Group";
import {GroupService} from "./group.service";
import {UserGroupFinest} from "../model/UserGroupFinest";

@Injectable({
  providedIn: 'root'
})
export class GroupFinestService {


  constructor(private http: HttpClient) { }

  getGroupById(groupId: number): Observable<GroupFinest> {
    const jwt = localStorage.getItem('jwt');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwt}`);
    return this.http.get<GroupFinest>(`${environnement.serveurUrl}group/${groupId}`, { headers });
  }

  getAllOtherMemberWitouthThisGroupId(groupId: number): Observable<UserGroupFinest[]> {
    const jwt = localStorage.getItem('jwt');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwt}`);
    return this.http.get<UserGroupFinest[]>(`${environnement.serveurUrl}group/${groupId}/nonmembers`, { headers });
  }

}
