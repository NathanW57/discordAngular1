import {Injectable} from '@angular/core';
import {Message} from '../model/Message';
import {LoginService} from './login.service';
import {Client, CompatClient, Stomp} from '@stomp/stompjs';
import {Observable, Subject, BehaviorSubject, first, tap} from "rxjs";
import {OutgoingMessage} from "../model/OutgoingMessage";
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  private stompClient!: CompatClient;
  private connected: Subject<boolean> = new BehaviorSubject<boolean>(false);
  messageSent: Subject<void> = new Subject<void>(); // Notify when a message is sent

  constructor(private loginService: LoginService, private messageService: MessageService) {
    this.initializeWebSocketConnection();
  }

  initializeWebSocketConnection() {
    const ws = () => new WebSocket('ws://localhost:8081/chat');
    this.stompClient = Stomp.over(ws);
    this.stompClient.debug = () => {
    };
    let that = this;
    this.stompClient.connect({}, function (frame: unknown) {
      that.connected.next(true);
    });
  }

  sendMessage(channelId: number, content: string): void {
    const user = this.loginService.getUser();
    console.log('User:', user);
    if (user) {
      const message: OutgoingMessage = {
        channelId: channelId,
        userId: user.id as number,
        content: content
      };
      console.log('Message:', message);
      this.messageService.saveMessage(message).pipe(
        tap(() => this.messageSent.next()) // Emit an event when the message is sent
      ).subscribe(() => {
        this.stompClient.publish({
          destination: `/app/chat/${message.channelId}`,
          body: JSON.stringify(message)
        });
      });
    }
  }

  subscribeToChannel(channelId: number): Observable<Message> {
    const messagesSubject = new Subject<Message>();

    this.connected.pipe(first()).subscribe(connected => {
      if (connected) {
        this.stompClient.subscribe(`/topic/chat/${channelId}`, (message) => {
          if (message.body) {
            const messageBody = JSON.parse(message.body);
            messagesSubject.next(messageBody);
          }
        });
      }
    });

    return messagesSubject.asObservable();
  }
}
