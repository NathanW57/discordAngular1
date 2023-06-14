import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environnement} from "../environnements/Environnement";
import {Channel} from "../model/Channel";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  constructor(private http: HttpClient) { }

  getChannelById(id : number):Observable<Channel> {
    return this.http.get<Channel>(`${environnement.serveurUrl}channel/${id}`)
  }

  getUserChannels(userId: number): Observable<Channel[]> {
    return this.http.get<Channel[]>(`${environnement.serveurUrl}user/${userId}/channels`);
  }


  getAllMembersByChannelId(id : number):Observable<Channel> {
    return this.http.get<Channel>(`${environnement.serveurUrl}channel/finest/${id}`)
  }
}
