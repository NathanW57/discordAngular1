import {Component, Input} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {UserService} from "../../../../service/user.service";
import {GroupFinestService} from "../../../../service/group-finest.service";
import {User} from "../../../../model/User";
import {UpdateUserComponent} from "../../AdminGroup/update-user/update-user.component";
import {GroupFinest} from "../../../../model/GroupFinest";
import {DialogDeleteUserComponent} from "../../AdminGroup/deleteUser/dialog-delete-user/dialog-delete-user.component";

@Component({
  selector: 'app-menu-utilisateur',
  templateUrl: './menu-utilisateur.component.html',
  styleUrls: ['./menu-utilisateur.component.scss']
})
export class MenuUtilisateurComponent {
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
