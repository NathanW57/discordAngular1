import { Component, OnInit } from '@angular/core';
import { Group } from "../../../../model/Group";
import { MatTableDataSource } from "@angular/material/table";
import { GroupService } from "../../../../service/group.service";
import { Router } from "@angular/router";
import {GroupFinestService} from "../../../../service/group-finest.service";

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
})
export class GroupComponent implements OnInit {

  dataSource: MatTableDataSource<Group>;
  displayedColumns: string[] = ['name'];

  constructor(private serviceGroup: GroupService, private router: Router , private groupFinest : GroupFinestService) {
    this.dataSource = new MatTableDataSource<Group>([]);
  }

  ngOnInit(): void {
    this.serviceGroup.getAllGroups();
    this.serviceGroup._group.subscribe((listeGroup) => {
      this.dataSource.data = listeGroup;
    });
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
}