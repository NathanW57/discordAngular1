import { Component, OnInit } from '@angular/core';
import { Group } from "../../../../../model/Group";
import { MatTableDataSource } from "@angular/material/table";
import { GroupService } from "../../../../../service/GroupService/group.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
})
export class GroupComponent implements OnInit {


  group : Group | undefined;
  dataSource: MatTableDataSource<Group>;
  displayedColumns: string[] = ['name'];

  private groupAdded: Subscription | undefined;

  private groupDeleted : Subscription | undefined;

  constructor(private serviceGroup: GroupService) {
    this.dataSource = new MatTableDataSource<Group>([]);
  }

  ngOnInit(): void {
    this.serviceGroup.getAllGroups();
    this.serviceGroup._group.subscribe((listeGroup) => {
      this.dataSource.data = listeGroup;
    });

    this.groupAdded = this.serviceGroup.groupAdded.subscribe(() => {
      this.serviceGroup.getAllGroups();
    }
    );

    this.groupDeleted = this.serviceGroup.deletedGroup.subscribe(() => {
      this.serviceGroup.getAllGroups();
    }
    );
  }

  onButtonClick(groupId: number): any {
    try {
      if (groupId != undefined) {
        return Number(groupId);
      }
    }
    catch (err){
      console.log(err)
      throw (err)
    }
  }

  deletedGroup(groupId: number): void {

    this.serviceGroup.deleteGroup(groupId)
      .subscribe(() => {
        this.serviceGroup.getAllGroups();
});

}
}
