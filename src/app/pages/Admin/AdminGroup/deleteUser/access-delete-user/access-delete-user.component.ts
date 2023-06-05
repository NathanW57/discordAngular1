import {Component, Input} from '@angular/core';
import {GroupFinest} from "../../../../../model/GroupFinest";
import {DialogDeleteUserComponent} from "../dialog-delete-user/dialog-delete-user.component";
import {MatDialog} from "@angular/material/dialog";
import {UserService} from "../../../../../service/user.service";
import {GroupFinestService} from "../../../../../service/group-finest.service";
import {User} from "../../../../../model/User";

@Component({
  selector: 'app-access-delete-user',
  templateUrl: './access-delete-user.component.html',
  styleUrls: ['./access-delete-user.component.scss']
})
export class AccessDeleteUserComponent {

  @Input() userId: number | undefined;
  @Input() groupIdTwo: number | undefined;

  constructor(
    private dialog: MatDialog,
    private userService: UserService,
    private groupService : GroupFinestService
  ) {}

  openDeleteUserUpdateDialog(): void {
    if (this.userId && this.groupIdTwo) {
      this.userService.getUserById(this.userId).subscribe(
        (user: User) => {
          this.groupService.getGroupIdAndUserId(this.groupIdTwo, this.userId).subscribe(
            (group: GroupFinest) => {
              const dialogRef = this.dialog.open(DialogDeleteUserComponent, {
                width: '600px',
                data: {user: user, groupId: this.groupIdTwo}
              });
            },
            (error) => {
              console.error('Error:', error);
            }
          );
        },
        (error) => {
          console.error('Error getting user:', error);
        }
      );
    } else {
      console.error('UserId or GroupId is missing');
    }
  }
}
