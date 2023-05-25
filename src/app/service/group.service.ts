import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Group} from "../model/Group";
import {environnement} from "../environnements/Environnement";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  public _group: BehaviorSubject<Group[]> = new BehaviorSubject<Group[]>([]);

  constructor(private http: HttpClient) {}


  public getAllGroups() {
    return this.http.get<Group[]>(environnement.serveurUrl + 'groups').subscribe((groups: Group[]) => {
      this._group.next(groups);
    });
  }
}
