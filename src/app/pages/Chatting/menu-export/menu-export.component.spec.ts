import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuExportComponent } from './menu-export.component';

describe('MenuExportComponent', () => {
  let component: MenuExportComponent;
  let fixture: ComponentFixture<MenuExportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuExportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
