import { Component } from '@angular/core';
import {LoginService} from "../../service/login.service";

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.scss']
})
export class LogOutComponent {
  constructor(public loginService:LoginService) {
  }


  onDisconnect(){
    this.loginService.disconnect();
  }
}
