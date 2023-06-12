import { Component } from '@angular/core';
import {UserService} from "../../../service/user.service";

@Component({
  selector: 'app-access-chat',
  templateUrl: './access-chat.component.html',
  styleUrls: ['./access-chat.component.scss']
})
export class AccessChatComponent {

  constructor(private userService : UserService) { }


  public getAllChannelByIdUser(id: number | undefined): void {
    this.userService.getAllChannelByIdUser(id).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    this.getAllChannelByIdUser(1);
  }
}
