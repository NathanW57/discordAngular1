import { Component } from '@angular/core';
import {UserService} from "../../../service/user.service";

@Component({
  selector: 'app-access-chat',
  templateUrl: './access-chat.component.html',
  styleUrls: ['./access-chat.component.scss']
})
export class AccessChatComponent {

  constructor(private userService : UserService) { }


}
