import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelFinestComponent } from './channel-finest.component';

describe('ChannelFinestComponent', () => {
  let component: ChannelFinestComponent;
  let fixture: ComponentFixture<ChannelFinestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChannelFinestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChannelFinestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
