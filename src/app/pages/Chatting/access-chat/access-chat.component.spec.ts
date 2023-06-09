import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessChatComponent } from './access-chat.component';

describe('AccessChatComponent', () => {
  let component: AccessChatComponent;
  let fixture: ComponentFixture<AccessChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
