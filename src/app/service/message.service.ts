import { Injectable } from '@angular/core';
import {Message} from "../model/Message";
import {environnement} from "../environnements/Environnement";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {OutgoingMessage} from "../model/OutgoingMessage";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }

  getMessagesByChannelId(channelId: number): Observable<Message[]> {
    return this.http.get<Message[]>(`${environnement.serveurUrl}messagesChannel/${channelId}`);
  }

  saveMessage(message: OutgoingMessage): Observable<any> {
    return this.http.post<Message>(`${environnement.serveurUrl}message`, message);
  }

  getMessageByIdMessage(idMessage: number): Observable<Message> {
    return this.http.get<Message>(`${environnement.serveurUrl}message/${idMessage}`);
  }

}
