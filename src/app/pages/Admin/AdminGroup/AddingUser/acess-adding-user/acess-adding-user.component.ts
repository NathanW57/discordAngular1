import {Component, Input} from '@angular/core';
import {GroupService} from "../../../../../service/group.service";
import {MatDialog} from "@angular/material/dialog";
import {GroupFinest} from "../../../../../model/GroupFinest";
import {AddUserComponent} from "../add-user/add-user.component";

@Component({
  selector: 'app-acess-adding-user',
  templateUrl: './acess-adding-user.component.html',
  styleUrls: ['./acess-adding-user.component.scss']
})

//creating a dialog box for adding a user
export class AcessAddingUserComponent {



  constructor(
    private dialog: MatDialog,
    private groupService: GroupService
  ) {
    console.log("user id " + this.groupId);
  }


  @Input() groupId?: number ;
  openUserUpdateDialog(): void {
    this.groupService.getGroupById(this.groupId).subscribe(
      (group: GroupFinest) => {
        const dialogRef = this.dialog.open(AddUserComponent, {
          width: '800px',
          data: group
        });
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
