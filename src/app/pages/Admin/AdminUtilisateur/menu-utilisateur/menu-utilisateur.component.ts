import {Component, Inject, Input} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {UserService} from "../../../../service/user.service";
import {User} from "../../../../model/User";
import {UpdateUserComponent} from "../update-user/update-user.component";
import {DialogUtilisateurDeleteComponent} from "../dialog-utilisateur-delete/dialog-utilisateur-delete.component";

@Component({
  selector: 'app-menu-utilisateur',
  templateUrl: './menu-utilisateur.component.html',
  styleUrls: ['./menu-utilisateur.component.scss']
})
export class MenuUtilisateurComponent {


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

  openDeleteUserUpdateDialog(): void {
    this.userService.getUserById(this.userId).subscribe(
      (user: User) => {
        const dialogRef = this.dialog.open(DialogUtilisateurDeleteComponent, {
          width: '400px',
          data: user
        });
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

}
