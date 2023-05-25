import { Component } from '@angular/core';
import {User} from "../../model/User";
import {LoginService} from "../../service/login.service";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {


  constructor() {
  }

}
