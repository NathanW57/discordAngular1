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

  private userAdded: Subscription | undefined;


  private userDeleted: Subscription | undefined;

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

  pageSizesOption = [2,4,6,8,10,25,50,100];
  pageSize = 10;
  pageIndex = 0;



  // Subject pour unsubscribe les subscription
  private unsubscribe$ = new Subject<void>();



  //Lorsque le composant est initialisé, on récupère les données
  ngOnInit(): void {
    this.userService.getAllUser()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(users => {
        this.dataSource.data = users;
      });

    // lors d'un ajout d'un utilisateur remettre à jour la liste
    this.userAdded = this.userService.userAdded
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => {
        this.userService.getAllUser()
          .pipe(takeUntil(this.unsubscribe$))
          .subscribe(users => {
            this.dataSource.data = users;
          });
      });

    // lors d'une suppression d'un utilisateur remettre à jour la liste
    this.userDeleted = this.userService.userDeleted
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => {
        this.userService.getAllUser()
          .pipe(takeUntil(this.unsubscribe$))
          .subscribe(users => {
            this.dataSource.data = users;
          });
      }
    );
  }


  //Lorsque le composants est détruit, on arrête les subscription
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
