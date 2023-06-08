import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatingGroupComponent } from './updating-group.component';

describe('UpdatingGroupComponent', () => {
  let component: UpdatingGroupComponent;
  let fixture: ComponentFixture<UpdatingGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatingGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatingGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
