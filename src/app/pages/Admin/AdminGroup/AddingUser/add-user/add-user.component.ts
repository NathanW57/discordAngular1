import {Component, Inject, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {GroupService} from "../../../../../service/group.service";
import {GroupFinest} from "../../../../../model/GroupFinest";
import {UserGroupFinest} from "../../../../../model/UserGroupFinest";
import {ActivatedRoute} from "@angular/router";
import {GroupFinestService} from "../../../../../service/group-finest.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";



@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit{


  groupFinest: GroupFinest | undefined
  groupId: number | undefined;



  pageSizesOption = [2,4,6,8,10];
  pageSize = 10;
  pageIndex = 0;

  @ViewChild(MatPaginator) set matPaginator(paginator: MatPaginator) {
    this.dataSource.paginator = paginator;
  }

  @ViewChild(MatSort)
  sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }


  dataSource: MatTableDataSource<UserGroupFinest>;

  displayedColumns: string[] = ['id','firstname','lastname','email'];

  constructor(private groupFinestService: GroupFinestService , private route: ActivatedRoute,@Inject(MAT_DIALOG_DATA) public data: any) {
    this.dataSource = new MatTableDataSource<UserGroupFinest>([]);
    this.groupId = data.groupId; // retrieve groupId from data object

  }

  ngOnInit(): void {
    if (this.groupId) {
      this.getGroupById(this.groupId);
    }
  }


  getGroupById(groupId: number): void {
    this.groupFinestService.getGroupById(groupId).subscribe(
      (group: GroupFinest) => {
        this.groupFinest = group;
        this.dataSource.data = group.members;
      },
      (error) => {
        console.log('Error occurred while fetching group:', error);
      }
    );
  }


}
