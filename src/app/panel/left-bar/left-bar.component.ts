import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.scss']
})
export class LeftBarComponent {

  constructor(private router: Router) {}

  redirectToAdminPanel() {
    this.router.navigateByUrl('/adminPanel');
  }

}
