import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {UserGroupFinest} from "../../../../../model/UserGroupFinest";
import {GroupFinestService} from "../../../../../service/group-finest.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  groupId: number | undefined;
  pageSizesOption = [2, 4, 6, 8, 10,25,50];
  pageSize = 10;
  pageIndex = 0;

  @ViewChild(MatPaginator) set matPaginator(paginator: MatPaginator) {
    this.dataSource.paginator = paginator;
    this.selectedDataSource.paginator = paginator;
  }

  @ViewChild(MatSort)
  sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.selectedDataSource.sort = this.sort;
  }

  validate() {
    // Handle your validation logic here
    console.log('Validation button clicked. Selected users:', this.selectedDataSource.data);
  }


  dataSource: MatTableDataSource<UserGroupFinest>;
  selectedDataSource: MatTableDataSource<UserGroupFinest>;

  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'email', 'actions'];
  selectedDisplayedColumns: string[] = ['id', 'firstname', 'lastname', 'email'];


  constructor(private groupFinestService: GroupFinestService, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.dataSource = new MatTableDataSource<UserGroupFinest>([]);
    this.selectedDataSource = new MatTableDataSource<UserGroupFinest>([]);
    this.groupId = data.groupId; // retrieve groupId from data object
  }

  ngOnInit(): void {
    if (this.groupId) {
      this.getAllOtherMemberWitouthThisGroupId(this.groupId);
    }
  }

  getAllOtherMemberWitouthThisGroupId(groupId: number): void {
    this.groupFinestService.getAllOtherMemberWitouthThisGroupId(groupId).subscribe(
      (users: UserGroupFinest[]) => {
        console.log('users:', users)
        this.dataSource.data = users;
      },
      (error) => {
        console.log('Error occurred while fetching non-members:', error);
      }
    );
  }

  onRowClicked(row: UserGroupFinest) {
    const alreadyAddedIndex = this.selectedDataSource.data.findIndex(user => user.id === row.id);

    // If user is not already added
    if (alreadyAddedIndex === -1) {
      // Add the selected user to the selectedUsers list
      this.selectedDataSource.data = [...this.selectedDataSource.data, row];

      // Remove the selected user from the dataSource
      this.dataSource.data = this.dataSource.data.filter(user => user.id !== row.id);
    }
  }
}
