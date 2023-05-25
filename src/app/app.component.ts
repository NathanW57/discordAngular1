import { Component } from '@angular/core';
import {LoginService} from "./service/login.service";
import {User} from "./model/User";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'discord';

  userConnected : User | null = null;
  constructor(private loginService : LoginService) {
  }

  ngOnInit(){
    this.loginService._userConnected
      .subscribe(
        user => (this.userConnected = user)
      )
  }
  onDisconnect(){
    this.loginService.disconnect();
  }
}
