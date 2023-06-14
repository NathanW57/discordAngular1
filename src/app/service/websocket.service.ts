// websocket.service.ts
import {Injectable} from '@angular/core';
import {Message} from '../model/Message';
import {LoginService} from './login.service';
import {CompatClient, Stomp, StompSubscription} from '@stomp/stompjs';
import {Observable, Subject, BehaviorSubject, first, tap} from "rxjs";
import {OutgoingMessage} from "../model/OutgoingMessage";
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  private stompClient!: CompatClient;
  private connected: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  messageReceived: Subject<void> = new Subject<void>();
  private channelSubscriptions: Map<number, StompSubscription> = new Map<number, StompSubscription>();

  constructor(private loginService: LoginService) {
    this.initializeWebSocketConnection();
  }

  initializeWebSocketConnection() {
    const ws = () => new WebSocket('ws://localhost:8081/chat');
    this.stompClient = Stomp.over(ws);
    this.stompClient.debug = () => {
    };
    let that = this;
    this.stompClient.connect({}, function (frame: unknown) {
      console.log("Connected to WebSocket");
      that.connected.next(true);
    });
  }

  sendMessage(channelId: number, content: string): void {
    const user = this.loginService.getUser();
    if (user) {
      const message: OutgoingMessage = {
        channelId: channelId,
        userId: user.id as number,
        content: content
      };
      console.log(`Sending message to channel ${channelId}: ${content}`);
      this.stompClient.publish({
        destination: `/app/chat/${message.channelId}`,
        body: JSON.stringify(message)
      })
      this.messageReceived.next();
    }
  }

  getNewMessages(channelId: number): Observable<Message> {
    const messagesSubject = new Subject<Message>();
    this.connected.pipe(first(connected => connected)).subscribe(connected => {
      if (connected) {
        const existingSub = this.channelSubscriptions.get(channelId);
        if (existingSub) {
          existingSub.unsubscribe();
        }
        const newSub = this.stompClient.subscribe(`/topic/messages/${channelId}`, (message) => {
          if (message.body) {
            const messageBody = JSON.parse(message.body);
            messagesSubject.next(messageBody);
            this.messageReceived.next();
          }
        });
        this.channelSubscriptions.set(channelId, newSub);
      }
    });
    return messagesSubject.asObservable();
  }
}
