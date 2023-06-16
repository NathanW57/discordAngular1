import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessAddingChannelComponent } from './access-adding-channel.component';

describe('AccessAddingChannelComponent', () => {
  let component: AccessAddingChannelComponent;
  let fixture: ComponentFixture<AccessAddingChannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessAddingChannelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessAddingChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
