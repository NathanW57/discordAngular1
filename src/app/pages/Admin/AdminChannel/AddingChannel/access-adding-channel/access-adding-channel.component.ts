import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {
  DialogAddingGroupComponent
} from "../../../AdminGroup/AddingGroup/dialog-adding-group/dialog-adding-group.component";
import {DialogAddingChannelComponent} from "../dialog-adding-channel/dialog-adding-channel.component";

@Component({
  selector: 'app-access-adding-channel',
  templateUrl: './access-adding-channel.component.html',
  styleUrls: ['./access-adding-channel.component.scss']
})
export class AccessAddingChannelComponent {

  constructor(private matDialog: MatDialog) {
  }
  openDialogAddingUser(): void {
    const dialogRef = this.matDialog.open(DialogAddingChannelComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
