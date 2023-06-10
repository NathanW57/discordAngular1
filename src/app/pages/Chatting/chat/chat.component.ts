import { Component, OnInit } from '@angular/core';
import {Channel} from "../../../model/Channel";
import {ChannelService} from "../../../service/channel.service";
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  channel: Channel | undefined;

  constructor(private channelService: ChannelService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const channelId = params['id']; // ou toute autre clé que vous utilisez pour l'identifiant du canal
      if (channelId) {
        this.getChannel(channelId);
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
}
