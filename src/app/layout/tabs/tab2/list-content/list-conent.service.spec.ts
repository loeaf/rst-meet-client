import { TestBed } from '@angular/core/testing';

import { ListConentService } from './list-conent.service';

describe('ListConentService', () => {
  let service: ListConentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListConentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
