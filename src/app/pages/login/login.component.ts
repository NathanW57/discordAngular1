import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginService} from "../../service/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  errorLogin : boolean = false;
  formulaire : FormGroup = this.formBuilder.group({
    email : ["",[Validators.required,Validators.email]],
    password : ["",Validators.required]
  });
  constructor(private formBuilder : FormBuilder,private loginService :LoginService , private router : Router) {
  }

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
