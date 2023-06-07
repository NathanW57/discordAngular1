import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {BehaviorSubject, Observable, Subject, tap} from "rxjs";
import { GroupFinest } from "../../model/GroupFinest";
import { environnement } from "../../environnements/Environnement";
import {Group} from "../../model/Group";
import {GroupService} from "./group.service";
import {UserGroupFinest} from "../../model/UserGroupFinest";

@Injectable({
  providedIn: 'root'
})
export class GroupFinestService {


  constructor(private http: HttpClient) { }

  memberAdded = new Subject<void>();

  memberDeleted = new Subject<void>();


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


  addMemberToGroup(groupId: number, userId: number): Observable<any> {
    const jwt = localStorage.getItem('jwt');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwt}`);

    return this.http.post<any>(`${environnement.serveurUrl}group/${groupId}/members/${userId}`, null, { headers }).pipe(
      tap(() => {
        this.memberAdded.next(); // Emit an event to say that a member was added
      })
    );
  }


  deleteMemberToGroup(groupId: number, userId: number | undefined): Observable<any> {
    const jwt = localStorage.getItem('jwt');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwt}`);

    return this.http.delete<any>(`${environnement.serveurUrl}group/${groupId}/members/${userId}`, { headers }).pipe(
      tap(() => {
        this.memberDeleted.next(); // Emit an event to say that a member was deleted
      })
    );
  }

  getGroupIdAndUserId(groupId: number | undefined, userId: number | undefined): Observable<any> {
    const jwt = localStorage.getItem('jwt');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwt}`);
    return this.http.get<any>(`${environnement.serveurUrl}group/${groupId}/members/${userId}`, { headers });
  }
}
