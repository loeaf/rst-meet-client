import { TestBed } from '@angular/core/testing';

import { RstListItemService } from './rst-list-item.service';

describe('RstListItemService', () => {
  let service: RstListItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RstListItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
