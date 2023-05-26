import {Component, OnInit} from '@angular/core';
import {User} from "../../model/User";
import {LoginService} from "../../service/login.service";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{



  user: User | null | undefined;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.loginService._userConnected.subscribe((user) => {
      this.user = user;
    });
  }

  isLoggedIn(): boolean {
    return this.loginService.isUserLoggedIn();
  }

  getUserFullName(): string {
    const user = this.loginService.getUser();
    return user ? `${user.firstname} ${user.lastname}` : '';
  }

  getUserFirstLetterOfFullName():string{
      const user = this.loginService.getUser();
      return user ? `${user.firstname.substring(0,1)}.${user.lastname.substring(0,1)}` : '';
    }


}
