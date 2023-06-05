import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserDialogAddingUserComponent } from './admin-user-dialog-adding-user.component';

describe('AdminUserDialogAddingUserComponent', () => {
  let component: AdminUserDialogAddingUserComponent;
  let fixture: ComponentFixture<AdminUserDialogAddingUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUserDialogAddingUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUserDialogAddingUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
