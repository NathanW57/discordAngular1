import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroupFinest } from "../../../../../model/GroupFinest";
import { GroupFinestService } from "../../../../../service/GroupService/group-finest.service";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {UserGroupFinest} from "../../../../../model/UserGroupFinest";
import {MatSort} from "@angular/material/sort";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-group-finest',
  templateUrl: './group-finest.component.html',
  styleUrls: ['./group-finest.component.scss']
})
export class GroupFinestComponent implements OnInit,OnDestroy {
  groupFinest: GroupFinest | undefined;

  isLoading = false;
  dataSource = new MatTableDataSource<UserGroupFinest>([]);
  displayedColumns: string[] = ['firstname', 'lastname', 'email', 'action'];

  @ViewChild(MatPaginator) set matPaginator(paginator: MatPaginator) {
    this.dataSource.paginator = paginator;
  }

  @ViewChild(MatSort) set matSort(sort : MatSort){
    this.dataSource.sort = sort;
  }

  filterValue!: string;


  private memberAddedSubscription: Subscription | undefined;


  private memberDeletedSubscription: Subscription | undefined;

  constructor(
    private groupFinestService: GroupFinestService,
    private route: ActivatedRoute
  ) { }

  pageSizesOption = [2,4,6,8,10];
  pageSize = 10;
  pageIndex = 0;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const groupId = params.get('id');
      if (groupId) {
        this.isLoading = true; // start loading
        this.getGroupById(Number(groupId));
      }
    });

    this.memberAddedSubscription = this.groupFinestService.memberAdded.subscribe(() => {
      const groupId = this.route.snapshot.paramMap.get('id');
      if (groupId) {
        this.getGroupById(Number(groupId));
      }
    });

    this.memberDeletedSubscription = this.groupFinestService.memberDeleted.subscribe(() => {
      const groupId = this.route.snapshot.paramMap.get('id');
      if (groupId) {
        this.getGroupById(Number(groupId));
      }
    }
    );
  }

  ngOnDestroy(): void {
    if (this.memberAddedSubscription) {
      this.memberAddedSubscription.unsubscribe();
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



  getGroupById(groupId: number): void {
    this.isLoading = true;
    this.groupFinestService.getGroupById(groupId).subscribe(
      (group: GroupFinest) => {
        this.groupFinest = group;
        this.dataSource.data = group.members;
        this.isLoading = false; // data loaded
      },
      (error) => {
        console.log('Error occurred while fetching group:', error);
        this.isLoading = false; // data loaded
      }
    );
  }

/*  getGroupById(groupId: number): void {
    this.isLoading = true;
    setTimeout(() => {
      this.groupFinestService.getGroupById(groupId).subscribe(
        (group: GroupFinest) => {
          this.groupFinest = group;
          this.dataSource.data = group.members;
          this.isLoading = false;
        },
        (error) => {
          console.log('Error occurred while fetching group:', error);
          this.isLoading = false;
        }
      );
    }, 2000); // Le délai est de 2000 millisecondes, soit 2 secondes
  }*/

  onChangePage(pageEvent: PageEvent) {
    this.pageIndex = pageEvent.pageIndex;
    this.pageSize = pageEvent.pageSize;
  }

}
