import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserAccessAddingComponent } from './admin-user-access-adding.component';

describe('AdminUserAccessAddingComponent', () => {
  let component: AdminUserAccessAddingComponent;
  let fixture: ComponentFixture<AdminUserAccessAddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUserAccessAddingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUserAccessAddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
