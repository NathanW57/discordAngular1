import {Component, Inject} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {User} from "../../../../../model/User";
import {GroupFinestService} from "../../../../../service/group-finest.service";

@Component({
  selector: 'app-dialog-delete-user',
  templateUrl: './dialog-delete-user.component.html',
  styleUrls: ['./dialog-delete-user.component.scss']
})
export class DialogDeleteUserComponent {



  constructor(private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef<DialogDeleteUserComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {user: User, groupId: number},
              private groupService : GroupFinestService) {
  }


nameUser = this.data.user.firstname + " " + this.data.user.lastname;
  cancel(): void {
    this.dialogRef.close();
  }

  validate() {
    if (this.data.user && this.data.user.id && this.data.groupId) {
      this.groupService.deleteMemberToGroup(this.data.groupId, this.data.user.id).subscribe(
        () => {
          console.log(this.data.user)
          this.dialogRef.close();
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    } else {
      console.error('UserId or GroupId is missing');
    }
  }


}
