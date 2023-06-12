import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuEnvoiFichierComponent } from './menu-envoi-fichier.component';

describe('MenuEnvoiFichierComponent', () => {
  let component: MenuEnvoiFichierComponent;
  let fixture: ComponentFixture<MenuEnvoiFichierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuEnvoiFichierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuEnvoiFichierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
