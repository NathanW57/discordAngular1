import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../service/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
constructor(private formBuilder : FormBuilder,private loginService :LoginService , private router : Router) {
}
  errorLogin : boolean = false;
  formulaire : FormGroup = this.formBuilder.group({
    email : ["",[Validators.required,Validators.email]]
  });

  onSubmit() {
    if (this.formulaire.valid) {
      this.loginService.connexion(this.formulaire.value)
        .subscribe({
          next : (jwt) => {
            localStorage.setItem("jwt", jwt);
            this.router.navigateByUrl('home')
          },
          error : (error) =>{
            this.errorLogin = true;
          }
        })

    }
  }
}
