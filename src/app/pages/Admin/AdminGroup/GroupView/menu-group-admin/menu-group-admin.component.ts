import { Component, Input } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { User } from "../../../../../model/User";
import { UserService } from "../../../../../service/user.service";
import { UpdateUserComponent } from "../../../AdminUtilisateur/update-user/update-user.component";
import {DialogDeleteUserComponent} from "../../deleteUser/dialog-delete-user/dialog-delete-user.component";
import {GroupFinestService} from "../../../../../service/GroupService/group-finest.service";
import {GroupFinest} from "../../../../../model/GroupFinest";
import {DeletingGroupComponent} from "../../deleting-group/deleting-group.component";
import {GroupService} from "../../../../../service/GroupService/group.service";
import {Group} from "../../../../../model/Group";
import {UpdatingGroupComponent} from "../../updating-group/updating-group.component";

@Component({
  selector: 'app-menu-group-admin',
  templateUrl: './menu-group-admin.component.html',
  styleUrls: ['./menu-group-admin.component.scss']
})
export class MenuGroupAdminComponent {
  @Input() groupIdTwo: number | undefined;



  constructor(
    private dialog: MatDialog,
    private groupService : GroupFinestService,
    private groupServiceOne : GroupService,
  ) {}

  openGroupUpdateDialog(): void {
    this.groupService.getGroupById(this.groupIdTwo).subscribe(
      (group: GroupFinest) => {
        const dialogRef = this.dialog.open(UpdatingGroupComponent, {
          width: '300px',
          height: '250px',
          data: group
        });
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  openDeleteUserDialog(): void {
    this.groupService.getGroupById(this.groupIdTwo).subscribe(
      (group: GroupFinest) => {
        const dialogRef = this.dialog.open(DeletingGroupComponent, {
          width: '300px',
          data: group
        });
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
