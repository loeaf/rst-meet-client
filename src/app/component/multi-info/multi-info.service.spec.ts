import { TestBed } from '@angular/core/testing';

import { MultiInfoService } from './multi-info.service';

describe('MultiInfoService', () => {
  let service: MultiInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultiInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
