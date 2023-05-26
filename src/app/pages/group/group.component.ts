import {Component, Inject} from '@angular/core';
import {Group} from "../../model/Group";
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {GroupService} from "../../service/group.service";


@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
})
export class GroupComponent {

  dataSource: MatTableDataSource<Group>;
  displayedColumns: string[] = ['id', 'name'];

  constructor(private serviceGroup: GroupService) {
    this.dataSource = new MatTableDataSource<Group>([]);
  }

  ngOnInit(): void {
    this.serviceGroup.getAllGroups();
    this.serviceGroup._group.subscribe((listeGroup) => {
      this.dataSource.data = listeGroup;
    });
  }
}
