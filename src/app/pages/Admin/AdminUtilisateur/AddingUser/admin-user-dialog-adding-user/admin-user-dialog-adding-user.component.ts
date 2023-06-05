import {Component, Inject} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Role} from "../../../../../model/Role";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {User} from "../../../../../model/User";
import {UserService} from "../../../../../service/user.service";

@Component({
  selector: 'app-admin-user-dialog-adding-user',
  templateUrl: './admin-user-dialog-adding-user.component.html',
  styleUrls: ['./admin-user-dialog-adding-user.component.scss']
})
export class AdminUserDialogAddingUserComponent {



  formulaire: FormGroup;
  errorComplete: boolean = false;

  // @ts-ignore
  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AdminUserDialogAddingUserComponent>,
    private userService: UserService,
  ) {
    this.formulaire = this.formBuilder.group({
      lastname: ["", [Validators.required, Validators.minLength(6)]],
      firstname: ["", [Validators.required, Validators.minLength(6)]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]],
    });


}


//validating the data in formulaire if it's correct or not
  validate(): void {
    if (this.formulaire.valid) {
      this.userService.addingUser(this.formulaire.value).subscribe(
        (user: User) => {
          this.dialogRef.close(user);
        },
        (error) => {
          this.errorComplete = true;
        }
      );
    }
  }


  cancel(): void {
    this.dialogRef.close();
  }


}
