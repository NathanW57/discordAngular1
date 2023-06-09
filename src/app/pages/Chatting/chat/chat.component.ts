import {Component, OnInit} from '@angular/core';
import {ChannelService} from "../../../service/channel.service";
import {GroupFinest} from "../../../model/GroupFinest";
import {Channel} from "../../../model/Channel";
import {MatTableDataSource} from "@angular/material/table";
import {UserGroupFinest} from "../../../model/UserGroupFinest";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit{

  constructor(channelService : ChannelService) { }

  dataSource = new MatTableDataSource<Channel>([]);
  displayedColumns: string[] = ['name'];
  channelService : ChannelService | undefined

  channel : Channel | undefined

  ngOnInit(): void {
    this.channelService?.getAllMembersByChannelId(1).subscribe(
      (channel: Channel) => {
        this.channel = channel;
        // @ts-ignore
        this.dataSource.data = channel.cha_members;
      }
    );
  }


  getChannelById(channelId: number): void {
    this.channelService?.getChannelById(channelId).subscribe(
      (channel: Channel) => {
        this.channel = channel;
      },
      (error) => {
        console.log('Error occurred while fetching group:', error);

      }
    );
  }
}
