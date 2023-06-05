import { Component, Input } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { User } from "../../../../model/User";
import { UserService } from "../../../../service/user.service";
import { UpdateUserComponent } from "../../AdminUtilisateur/update-user/update-user.component";
import {DialogDeleteUserComponent} from "../deleteUser/dialog-delete-user/dialog-delete-user.component";
import {GroupFinestService} from "../../../../service/group-finest.service";
import {GroupFinest} from "../../../../model/GroupFinest";

@Component({
  selector: 'app-menu-group-admin',
  templateUrl: './menu-group-admin.component.html',
  styleUrls: ['./menu-group-admin.component.scss']
})
export class MenuGroupAdminComponent {
  @Input() userId: number | undefined;


  @Input() groupIdTwo: number | undefined;



  constructor(
    private dialog: MatDialog,
    private userService: UserService,
    private groupService : GroupFinestService
  ) {}

  openUserUpdateDialog(): void {
    this.userService.getUserById(this.userId).subscribe(
      (user: User) => {
        const dialogRef = this.dialog.open(UpdateUserComponent, {
          width: '800px',
          data: user
        });
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  openDeleteUserUpdateDialog(): void {
    this.groupService.getGroupIdAndUserId(1,this.userId).subscribe(
      (group: GroupFinest) => {
        const dialogRef = this.dialog.open(DialogDeleteUserComponent, {
          width: '600px',
          data: group
        });
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
