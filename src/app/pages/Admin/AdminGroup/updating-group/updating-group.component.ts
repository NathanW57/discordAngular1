import {Component, Inject} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Role} from "../../../../model/Role";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {User} from "../../../../model/User";
import {Group} from "../../../../model/Group";
import {GroupFinest} from "../../../../model/GroupFinest";

@Component({
  selector: 'app-updating-group',
  templateUrl: './updating-group.component.html',
  styleUrls: ['./updating-group.component.scss']
})
export class UpdatingGroupComponent {
  formulaire: FormGroup;
  errorComplete: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<UpdatingGroupComponent>,
    @Inject(MAT_DIALOG_DATA) public group: GroupFinest
  ) {
    this.formulaire = this.formBuilder.group({
      id: [this.group.id],
      name: [group.name, [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
    });
  }



  cancel(): void {
    this.dialogRef.close();
  }

}
