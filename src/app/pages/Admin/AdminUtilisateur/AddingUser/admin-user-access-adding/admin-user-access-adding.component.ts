import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {
  AdminUserDialogAddingUserComponent
} from "../admin-user-dialog-adding-user/admin-user-dialog-adding-user.component";

@Component({
  selector: 'app-admin-user-access-adding',
  templateUrl: './admin-user-access-adding.component.html',
  styleUrls: ['./admin-user-access-adding.component.scss']
})
export class AdminUserAccessAddingComponent {

  constructor(private matDialog: MatDialog) {
  }
  openDialogAddingUser(): void {
    const dialogRef = this.matDialog.open(AdminUserDialogAddingUserComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
