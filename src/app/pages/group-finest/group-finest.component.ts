import { Component } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {GroupFinest} from "../../model/GroupFinest";
import {GroupFinestService} from "../../service/group-finest.service";

@Component({
  selector: 'app-group-finest',
  templateUrl: './group-finest.component.html',
  styleUrls: ['./group-finest.component.scss']
})
export class GroupFinestComponent {
  dataSource: MatTableDataSource<GroupFinest>;
  displayedColumns: string[] = ['id','email','firstname','lastname'];

  constructor(private groupFinestService: GroupFinestService) {
    this.dataSource = new MatTableDataSource<GroupFinest>([]);
  }

  ngOnInit(): void {
    this.groupFinestService.getAllGroupsFinest();
    this.groupFinestService._group.subscribe((listeGroup) => {
      this.dataSource.data = listeGroup;
    });
  }
}
