import { Component, OnInit } from '@angular/core';
import {Channel} from "../../../model/Channel";
import {ChannelService} from "../../../service/channel.service";
import {ActivatedRoute} from "@angular/router";
import {WebSocketService} from "../../../service/web-socket.service";
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  channel: Channel | undefined;

  constructor(private channelService: ChannelService,private route: ActivatedRoute,private socketService: WebSocketService) { }


  public messages: string[] = [];
  public newMessage: string = '';



  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const channelId = params['id']; // ou toute autre clé que vous utilisez pour l'identifiant du canal
      if (channelId) {
        this.getChannel(channelId);
        this.socketService.connect();
        this.socketService.messages$.subscribe((message) => {
          this.messages.push(message);
        });
      }
  });
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
    this.socketService.sendMessage(this.newMessage);
    this.newMessage = '';
  }
}
