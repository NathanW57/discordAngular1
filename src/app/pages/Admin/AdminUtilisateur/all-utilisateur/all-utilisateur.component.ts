import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {GroupFinest} from "../../../../model/GroupFinest";
import {MatTableDataSource} from "@angular/material/table";
import {UserGroupFinest} from "../../../../model/UserGroupFinest";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {Subject, Subscription, takeUntil} from "rxjs";
import {GroupFinestService} from "../../../../service/GroupService/group-finest.service";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../../service/user.service";
import {User} from "../../../../model/User";

@Component({
  selector: 'app-all-utilisateur',
  templateUrl: './all-utilisateur.component.html',
  styleUrls: ['./all-utilisateur.component.scss']
})
export class AllUtilisateurComponent implements OnInit, OnDestroy {


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


  constructor(
    private userService: UserService
  ) {
  }

  pageSizesOption = [2,4,6,8,10];
  pageSize = 8;
  pageIndex = 0;



  // Subject pour unsubscribe les subscription
  private unsubscribe$ = new Subject<void>();



  ngOnInit(): void {
    this.getUsers();

    this.userService.userAdded.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
      this.getUsers();
    });

    this.userService.userDeleted.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
      this.getUsers();
    });
  }

  private getUsers() {
    this.userService.getAllUser().pipe(takeUntil(this.unsubscribe$)).subscribe(users => {
      this.dataSource.data = users;
    });
  }



  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onChangePage(pageEvent: PageEvent) {
    this.pageIndex = pageEvent.pageIndex;
    this.pageSize = pageEvent.pageSize;
  }


}
