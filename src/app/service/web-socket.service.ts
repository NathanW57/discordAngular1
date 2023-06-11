import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Message} from "../model/Message";

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private messagesSubject: BehaviorSubject<Message[]> = new BehaviorSubject<Message[]>([]);
  public messages$: Observable<Message[]> = this.messagesSubject.asObservable();

  constructor(private stompService: StompRService) {}

  public connect(): void {
    this.stompService.initAndConnect();
    this.stompService.subscribe('/topic/messages').subscribe((message) => {
      const newMessage: Message = JSON.parse(message.body);
      this.messagesSubject.next([...this.messagesSubject.value, newMessage]);
    });
  }

  public sendMessage(content: string): void {
    const newMessage: Message = {
      content: content,
      sender: 'John',
      time: new Date().toLocaleTimeString()
    };
    this.stompService.publish('/app/chat.sendMessage', JSON.stringify(newMessage));
  }
}

