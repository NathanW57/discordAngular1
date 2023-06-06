import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessAddingGroupComponent } from './access-adding-group.component';

describe('AccessAddingGroupComponent', () => {
  let component: AccessAddingGroupComponent;
  let fixture: ComponentFixture<AccessAddingGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessAddingGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessAddingGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
