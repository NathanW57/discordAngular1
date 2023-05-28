import {Component, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent {
  constructor(private router: Router) {}

  showGroupTable = false;
  @Input() list: any[] | undefined;

  items = [
    {
      name: 'Utilisateurs',
      link: 'users',
      icon: 'person',
    },
    {
      name: 'Groupes',
      link: 'group',
      icon: 'groups',
    },
    {
      name: 'Channels',
      link: 'channels',
      icon: 'forum',
    },
    {
      name: 'Statistiques',
      link: 'stats',
      icon: 'analytics',
    },
  ];



}
