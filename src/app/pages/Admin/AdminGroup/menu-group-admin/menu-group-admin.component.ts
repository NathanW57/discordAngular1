import { Component, Input } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { User } from "../../../../model/User";
import { UserService } from "../../../../service/user.service";
import { UpdateUserComponent } from "../update-user/update-user.component";

@Component({
  selector: 'app-menu-group-admin',
  templateUrl: './menu-group-admin.component.html',
  styleUrls: ['./menu-group-admin.component.scss']
})
export class MenuGroupAdminComponent {
  @Input() userId: number | undefined;

  constructor(
    private dialog: MatDialog,
    private userService: UserService
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
}
