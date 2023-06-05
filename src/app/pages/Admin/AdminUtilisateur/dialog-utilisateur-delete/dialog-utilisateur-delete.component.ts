import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {User} from "../../../../model/User";
import {UserService} from "../../../../service/user.service";

@Component({
  selector: 'app-dialog-utilisateur-delete',
  templateUrl: './dialog-utilisateur-delete.component.html',
  styleUrls: ['./dialog-utilisateur-delete.component.scss']
})
export class DialogUtilisateurDeleteComponent {


  constructor(private dialogRef: MatDialogRef<DialogUtilisateurDeleteComponent>,
              @Inject(MAT_DIALOG_DATA) public user: User ,
              private userService: UserService,) {
  }


  cancel(): void {
    this.dialogRef.close();
  }

  nameUser = this.user.firstname + " " + this.user.lastname;

  validate() {
    if (this.user.id) {
      this.userService.userDeleteById(this.user.id).subscribe(
        () => {
          console.log(this.user.id)
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
