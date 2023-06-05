import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUtilisateurDeleteComponent } from './dialog-utilisateur-delete.component';

describe('DialogUtilisateurDeleteComponent', () => {
  let component: DialogUtilisateurDeleteComponent;
  let fixture: ComponentFixture<DialogUtilisateurDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogUtilisateurDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogUtilisateurDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
