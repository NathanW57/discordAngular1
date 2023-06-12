import { Injectable } from '@angular/core';
// @ts-ignore
import { Client, Message } from '@stomp/stompjs';
import {environnementWs} from "../environnements/environnementWs";
import {LoginService} from "./login.service";
// @ts-ignore
import { StompService } from '@stomp/ng2-stompjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private stompClient: Client;


  constructor(private loginService: LoginService) {
    this.stompClient = new Client();
    this.stompClient.configure({
      brokerURL: environnementWs.websocketUrl,
      // other configuration options
    });
    this.stompClient.activate();
  }

  // sendMessage(channelId: number, content: string): void {
  //   const user = this.loginService.getUser();
  //   if (user) {
  //     const message: Message = {
  //       id: 0,
  //       content: content,
  //       timestamp: '',
  //       user: user
  //     };
  //     this.stompService.publish(`/app/chat/${channelId}`, JSON.stringify(message));
  //   }
  // }
}

