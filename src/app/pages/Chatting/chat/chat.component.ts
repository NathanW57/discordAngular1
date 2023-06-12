import { Component, OnInit } from '@angular/core';
import { Channel } from "../../../model/Channel";
import { ChannelService } from "../../../service/channel.service";
import { ActivatedRoute } from "@angular/router";
import {Message} from "../../../model/Message";
import {MessageService} from "../../../service/message.service";
import {User} from "../../../model/User";
import {LoginService} from "../../../service/login.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  channel: Channel | undefined;
  messages: Message[] = [];  // pour stocker les messages du canal

  newMessage: string = '';
  currentUser!: User;

  constructor(private authService : LoginService,private channelService: ChannelService, private messageService: MessageService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const channelId = params['id'];
      if (channelId) {
        this.getChannel(channelId);
        this.getMessages(channelId);
      }
    });

    this.currentUser = this.authService.getUser()!;
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

  // public sendMessage(channelId: number, message: string): void {
  //   this.webSocket.sendMessage(channelId, message);
  // }
}
