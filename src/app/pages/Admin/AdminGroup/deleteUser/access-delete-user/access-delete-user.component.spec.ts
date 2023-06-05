import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessDeleteUserComponent } from './access-delete-user.component';

describe('AccessDeleteUserComponent', () => {
  let component: AccessDeleteUserComponent;
  let fixture: ComponentFixture<AccessDeleteUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessDeleteUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessDeleteUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
