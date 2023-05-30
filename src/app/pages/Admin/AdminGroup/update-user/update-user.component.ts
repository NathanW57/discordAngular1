import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Role} from "../../../../model/Role";

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent {

  constructor(private formBuilder : FormBuilder) {
  }

  errorComplete : boolean = false;
  formulaire : FormGroup = this.formBuilder.group({
    lastname : ["",[Validators.required,Validators.minLength(6)]],
    firstname : ["",[Validators.required,Validators.minLength(6)]],
    email : ["",[Validators.required,Validators.email]]
  });


  formRole = new FormControl('');
  roles: Role[] = [
    {name: 'ROLE_ADMIN', id: 1},
    {name: 'ROLE_USER', id: 2},
  ];
}
