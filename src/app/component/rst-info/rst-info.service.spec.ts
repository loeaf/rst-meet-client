import { TestBed } from '@angular/core/testing';

import { RstInfoService } from './rst-info.service';

describe('RstInfoService', () => {
  let service: RstInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RstInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
