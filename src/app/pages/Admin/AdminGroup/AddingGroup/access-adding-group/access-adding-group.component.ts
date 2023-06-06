import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogAddingGroupComponent} from "../dialog-adding-group/dialog-adding-group.component";

@Component({
  selector: 'app-access-adding-group',
  templateUrl: './access-adding-group.component.html',
  styleUrls: ['./access-adding-group.component.scss']
})
export class AccessAddingGroupComponent {


  constructor(private matDialog: MatDialog) {
  }
  openDialogAddingUser(): void {
    const dialogRef = this.matDialog.open(DialogAddingGroupComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
