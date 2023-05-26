import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessAdminComponent } from './acess-admin.component';

describe('AcessAdminComponent', () => {
  let component: AcessAdminComponent;
  let fixture: ComponentFixture<AcessAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcessAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcessAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
