import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Group} from "../../../../../model/Group";
import {Channel} from "../../../../../model/Channel";
import {ChannelService} from "../../../../../service/channel.service";

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit{

  channel$: Observable<Channel[]> | undefined;


  constructor(private channelService : ChannelService) {
  }

  ngOnInit() {
    this.getGroup();
  }



  selectedId: number | null = null;

  selectedGroupId: number | undefined;
  onButtonClick(groupId: number | undefined): any {
    try {
      console.log(this.selectedId);
      if (groupId != undefined) {
        this.selectedId = groupId;
        console.log(this.selectedId);
        this.selectedGroupId = groupId;
        return Number(groupId);
      }
    }
    catch (err){
      console.log(err)
      throw (err)
    }
  }

  getGroup(){
    this.channel$ = this.channelService.getChannels();
  }
}
