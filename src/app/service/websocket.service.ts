import { Injectable } from '@angular/core';
import {environnementWs} from "../environnements/environnementWs";
import {LoginService} from "./login.service";
import {Message} from "../model/Message";
import {CompatClient, Stomp} from "@stomp/stompjs";

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  // private stompClient: CompatClient;


  // constructor(private loginService: LoginService) {
  //   this.stompClient = Stomp.client(environnementWs.websocketUrl);
  //   this.stompClient.connect({}, (channelId:number) => {
  //     this.stompClient.subscribe(`/topic/chat/${channelId}`, (message) => {
  //       console.log(message);
  //     });
  //   });
  //   }
  // }

  // sendMessage(channelId: number, content: string): void {
  //   const user = this.loginService.getUser();
  //   if (user) {
  //     const message: Message = {
  //       id: 0,
  //       content: content,
  //       timestamp: '',
  //       user: user
  //     };
  //     this.stompClient.publish(`/app/chat`, JSON.stringify(message));
  //   }
  // }
// }
}
