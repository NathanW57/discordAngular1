import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../../service/login.service";

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.scss']
})
export class LeftBarComponent {

  constructor(private router: Router,public login : LoginService) {}

  redirectToAdminPanel() {
    this.router.navigateByUrl('/adminPanel');
  }

  redirectToChat() {
    this.router.navigateByUrl('/chat/1');
  }

}
