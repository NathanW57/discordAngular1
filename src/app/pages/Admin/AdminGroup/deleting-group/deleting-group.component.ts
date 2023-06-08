import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {GroupService} from "../../../../service/GroupService/group.service";
import {GroupFinest} from "../../../../model/GroupFinest";

@Component({
  selector: 'app-deleting-group',
  templateUrl: './deleting-group.component.html',
  styleUrls: ['./deleting-group.component.scss']
})
export class DeletingGroupComponent {

  constructor(
    private dialogRef: MatDialogRef<DeletingGroupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: GroupFinest,
    private groupService : GroupService) {
  }

  groupname = this.data.name;
  cancel(): void {
    this.dialogRef.close();
  }

  validate() {
    if (this.data.id && this.data) {
      this.groupService.deleteGroup(this.data.id).subscribe(
        () => {
          console.log(this.data)
          this.dialogRef.close();
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    } else {
      console.error('GroupId is missing');
      console.log(this.data)
    }
  }
}
