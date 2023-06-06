import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddingGroupComponent } from './dialog-adding-group.component';

describe('DialogAddingGroupComponent', () => {
  let component: DialogAddingGroupComponent;
  let fixture: ComponentFixture<DialogAddingGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddingGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddingGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
