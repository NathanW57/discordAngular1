import { Component, OnInit } from '@angular/core';
import { Group } from "../../../../../model/Group";
import { MatTableDataSource } from "@angular/material/table";
import { GroupService } from "../../../../../service/GroupService/group.service";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
})
export class GroupComponent implements OnInit {


  groups$: Observable<Group[]> | undefined;

  private groupAdded: Subscription | undefined;
  private groupDeleted: Subscription | undefined;

  constructor(private serviceGroup: GroupService) {
  }


  ngOnInit() {
    this.serviceGroup.groupAdded.subscribe(() => {
      console.log('A group was added.');
      this.getGroups();
    });


    this.serviceGroup.deletedGroup.subscribe(() => {
      console.log('A group was deleted.');
      this.getGroups();
    });

    this.getGroups();
  }

  ngOnDestroy(): void {
    this.groupAdded?.unsubscribe();
    this.groupDeleted?.unsubscribe();
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


  getGroups(): void {
    this.groups$ = this.serviceGroup.getGroups();
  }

  deletedGroup(groupId: number): void {

}
}
