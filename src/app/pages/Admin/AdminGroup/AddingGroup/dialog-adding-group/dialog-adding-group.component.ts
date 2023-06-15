import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {User} from "../../../../../model/User";
import {GroupService} from "../../../../../service/GroupService/group.service";
import {Group} from "../../../../../model/Group";

@Component({
  selector: 'app-dialog-adding-group',
  templateUrl: './dialog-adding-group.component.html',
  styleUrls: ['./dialog-adding-group.component.scss']
})
export class DialogAddingGroupComponent {

  formulaire: FormGroup;

  errorComplete: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DialogAddingGroupComponent>,
    private groupService: GroupService,
  ) {
    this.formulaire = this.formBuilder.group({
      name: ["", [Validators.required,
        Validators.minLength(2),
        Validators.maxLength(15),
        Validators.pattern(/^[a-zA-Z0-9\s]*$/)]
      ],
    });


  }


//validating the data in formulaire if it's correct or not
  validate(): void {
    if (this.formulaire.valid) {
      this.groupService.addGroup(this.formulaire.value).subscribe(
        (group: Group) => {
          this.dialogRef.close(group);
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
