// chat.component.ts
import {ChangeDetectorRef, Component, NgZone, OnInit, OnDestroy} from '@angular/core';
import { Channel } from "../../../model/Channel";
import { ChannelService } from "../../../service/channel.service";
import { ActivatedRoute } from "@angular/router";
import { Message } from "../../../model/Message";
import { MessageService } from "../../../service/message.service";
import { User } from "../../../model/User";
import { LoginService } from "../../../service/login.service";
import { WebSocketService } from "../../../service/websocket.service";
import { UserService } from "../../../service/user.service";
import { IncomingMessage } from "../../../model/IncomingMessage";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {
  channel: Channel | undefined;
  messages: Message[] = [];
  private userMessage: Subscription | undefined;
  private channelSubscriptions: Map<number, Subscription> = new Map<number, Subscription>();

  isIncomingMessage(message: Message): message is IncomingMessage {
    return (message as IncomingMessage).sender !== undefined;
  }

  currentUser!: User;
  messageForm = new FormGroup({
    message: new FormControl("", [
      Validators.required,
      Validators.minLength(1),
    ]),
  });
  $channelId = Number(this.route.snapshot.paramMap.get('id'));

  constructor(
    private webSocket: WebSocketService,
    private authService : LoginService,
    private channelService: ChannelService,
    private messageService: MessageService,
    private userService: UserService,
    private route: ActivatedRoute,
    private cdr : ChangeDetectorRef,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const channelId = params['id'];
      if (channelId) {
        this.getChannel(channelId);
        this.getMessages(channelId);
        this.webSocket.getNewMessages(channelId).subscribe((message: Message) => {
          this.messages.push(message);
          this.scrollToBottom();
          this.cdr.detectChanges();
        });
      }
    });

    this.webSocket.messageReceived.subscribe(() => {
      if (this.channel) {
        this.getMessages(this.channel.id);
      }
    });

    this.currentUser = this.authService.getUser()!;
  }

  scrollToBottom(): void {
    setTimeout(() => {
      var chat = document.getElementById("contentMessage");
      if (chat) {
        chat.scrollTop = chat.scrollHeight;
      }
    }, 0);
  }



  getMessages(channelId: number): void {
    this.messageService.getMessagesByChannelId(channelId)
      .subscribe(
        (messages: Message[]) => {
          this.messages = messages;
          this.scrollToBottom(); // Scroll to bottom after assigning messages
        },
        (error: any) => {
          console.error(error);
        }
      );
  }


  getChannel(id: number): void {
    this.channelService.getAllMembersByChannelId(id)
      .subscribe(
        (channel: Channel) => {
          this.channel = channel;
        },
        (error: any) => {
          console.error(error);
        }
      );
  }

  public sendMessage(): void {
    if (this.channel && this.messageForm.valid) {
      const messageContent = this.messageForm.get('message')!.value;
      if (messageContent !== null) {
        this.webSocket.sendMessage(this.channel.id, messageContent);
        this.messageForm.reset();
      }
    }
  }

  subscribeToChannel(channelId: number): void {
    const existingSub = this.channelSubscriptions.get(channelId);
    if (existingSub) {
      existingSub.unsubscribe();
    }

    const newSub = this.webSocket.getNewMessages(channelId).subscribe((message: Message) => {
      this.ngZone.run(() => {
        this.messages.push(message);
        var chat = document.getElementById("contentMessage");
        chat!.scrollTop = chat!.scrollHeight;
        this.cdr.detectChanges();
      });
    });
    this.channelSubscriptions.set(channelId, newSub);
  }

  ngOnDestroy(): void {
    this.channelSubscriptions.forEach(sub => sub.unsubscribe());
    if (this.userMessage) {
      this.userMessage.unsubscribe();
    }
  }
}
