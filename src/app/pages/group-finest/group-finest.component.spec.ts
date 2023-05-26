import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupFinestComponent } from './group-finest.component';

describe('GroupFinestComponent', () => {
  let component: GroupFinestComponent;
  let fixture: ComponentFixture<GroupFinestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupFinestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupFinestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
