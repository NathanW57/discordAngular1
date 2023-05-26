import { TestBed } from '@angular/core/testing';

import { GroupFinestService } from './group-finest.service';

describe('GroupFinestService', () => {
  let service: GroupFinestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupFinestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
