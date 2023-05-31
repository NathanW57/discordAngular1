import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Role } from "../../../../model/Role";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { User } from 'src/app/model/User';
import {UpdateUserPipe} from "../../../../pipe/update-user.pipe";

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  formulaire: FormGroup;
  errorComplete: boolean = false;
  formRole = new FormControl([] as Role[]);

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<UpdateUserComponent>,
    @Inject(MAT_DIALOG_DATA) public user: User // Injectez les données de l'utilisateur dans la boîte de dialogue
  ) {
    this.formulaire = this.formBuilder.group({
      id: [this.user.id],
      lastname: [user.lastname, [Validators.required, Validators.minLength(6)]],
      firstname: [user.firstname, [Validators.required, Validators.minLength(6)]],
      email: [user.email, [Validators.required, Validators.email]],
      role : [user.role],
      formRole: this.formRole,
    });
  }

  getSelectedRoleNames(): string {
    const selectedRoles = this.formulaire.get('formRole')!.value;
    if (selectedRoles && selectedRoles.length > 0) {
      return selectedRoles.map((role: Role) => role.name).join(', ');
    }
    return '';
  }






  ngOnInit() {
    // Initialize formRole with the roles from the user
    this.formRole.setValue(this.user.role);
  }

  cancel(): void {
    this.dialogRef.close();
  }

  protected readonly UpdateUserPipe = UpdateUserPipe;
}
