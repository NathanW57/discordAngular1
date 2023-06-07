import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuGroupAdminComponent } from './menu-group-admin.component';

describe('MenuGroupAdminComponent', () => {
  let component: MenuGroupAdminComponent;
  let fixture: ComponentFixture<MenuGroupAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuGroupAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuGroupAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
