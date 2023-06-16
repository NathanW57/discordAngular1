import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddingChannelComponent } from './dialog-adding-channel.component';

describe('DialogAddingChannelComponent', () => {
  let component: DialogAddingChannelComponent;
  let fixture: ComponentFixture<DialogAddingChannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddingChannelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddingChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
