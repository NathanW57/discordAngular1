import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletingGroupComponent } from './deleting-group.component';

describe('DeletingGroupComponent', () => {
  let component: DeletingGroupComponent;
  let fixture: ComponentFixture<DeletingGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletingGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletingGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
