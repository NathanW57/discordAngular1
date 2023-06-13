import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
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

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  channel: Channel | undefined;

  messages: Message[] = [];


  currentUser!: User;

  isIncomingMessage(message: Message): message is IncomingMessage {
    return (message as IncomingMessage).sender !== undefined;
  }


  messageForm = new FormGroup({
    message: new FormControl("", [
      Validators.required,
      Validators.minLength(1),
    ]),
  });

  constructor(
    private webSocket: WebSocketService,
    private authService : LoginService,
    private channelService: ChannelService,
    private messageService: MessageService,
    private userService: UserService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const channelId = params['id'];
      if (channelId) {
        this.getChannel(channelId);
        this.getMessages(channelId);
        this.webSocket.subscribeToChannel(channelId).subscribe((message: Message) => {
          this.messages.push(message);
          this.cdr.detectChanges();
          if ('userId' in message) {
            this.userService.getUserById(message.userId).subscribe(user => {
            });
          }
        });
      }
    });

    this.webSocket.messageSent.subscribe(() => {
      if (this.channel) {
        this.getMessages(this.channel.id);
      }
    });

    this.currentUser = this.authService.getUser()!;
  }

  getMessages(channelId: number): void {
    this.messageService.getMessagesByChannelId(channelId)
      .subscribe(
        (messages: Message[]) => {
          this.messages = messages;
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

}
