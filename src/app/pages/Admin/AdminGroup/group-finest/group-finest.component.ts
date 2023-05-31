import {Component, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroupFinest } from "../../../../model/GroupFinest";
import { GroupFinestService } from "../../../../service/group-finest.service";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatTableDataSource, MatTableDataSourcePaginator} from "@angular/material/table";
import {UserGroupFinest} from "../../../../model/UserGroupFinest";

@Component({
  selector: 'app-group-finest',
  templateUrl: './group-finest.component.html',
  styleUrls: ['./group-finest.component.scss']
})
export class GroupFinestComponent implements OnInit {
  groupFinest: GroupFinest | undefined;
  isLoading = false;

  constructor(
    private groupFinestService: GroupFinestService,
    private route: ActivatedRoute
  ) { }

  pageSizesOption = [2,4,6,8,10];
  pageSize = 10;
  pageIndex = 0;

  pageEvent : PageEvent | undefined;
  onChangePage(e:PageEvent) {
    this.pageEvent = e;
    this.pageIndex = e.pageIndex;
    this.pageSize = e.pageSize;
  }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const groupId = params.get('id');
      if (groupId) {
        this.getGroupById(Number(groupId));
      }
    });
  }

  getGroupById(groupId: number): void {
    this.groupFinestService.getGroupById(groupId).subscribe(
      (group: GroupFinest) => {
        this.groupFinest = group;
      },
      (error) => {
        console.log('Error occurred while fetching group:', error);
      }
    );
  }



}
