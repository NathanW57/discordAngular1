import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroupFinest } from "../../../../model/GroupFinest";
import { GroupFinestService } from "../../../../service/group-finest.service";

@Component({
  selector: 'app-group-finest',
  templateUrl: './group-finest.component.html',
  styleUrls: ['./group-finest.component.scss']
})
export class GroupFinestComponent implements OnInit {
  groupFinest: GroupFinest | undefined;

  constructor(
    private groupFinestService: GroupFinestService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const groupId = params.get('id');
      if (groupId) {
        this.getGroupById(Number(groupId));
      }
    });
  }

  getGroupById(groupId: number): void {
    this.groupFinestService.getGroupById(groupId).subscribe(
      (group: GroupFinest) => {
        this.groupFinest = group;
      },
      (error) => {
        console.log('Error occurred while fetching group:', error);
      }
    );
  }
}
