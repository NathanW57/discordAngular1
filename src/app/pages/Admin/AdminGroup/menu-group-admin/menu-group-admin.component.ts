import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu-group-admin',
  templateUrl: './menu-group-admin.component.html',
  styleUrls: ['./menu-group-admin.component.scss']
})
export class MenuGroupAdminComponent {

  constructor(private router: Router) {
  }
}
