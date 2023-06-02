import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessAddingUserComponent } from './acess-adding-user.component';

describe('AcessAddingUserComponent', () => {
  let component: AcessAddingUserComponent;
  let fixture: ComponentFixture<AcessAddingUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcessAddingUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcessAddingUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
