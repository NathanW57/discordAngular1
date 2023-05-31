import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {User} from "../../../../model/User";
import {UserService} from "../../../../service/user.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";



@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit{


  pageSizesOption = [2,4,6,8,10];
  pageSize = 10;
  pageIndex = 0;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }


  dataSource: MatTableDataSource<User>;

  displayedColumns: string[] = ['id','firstname','lastname','email'];

  constructor(private userService : UserService) {
    this.dataSource = new MatTableDataSource<User>([]);
  }


  ngOnInit(): void {
    this.userService.getAllUser();
    this.userService._user.subscribe((listeUser) => {
      this.dataSource.data = listeUser;
      this.dataSource.paginator = this.paginator;
    });
  }


}
