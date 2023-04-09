import { TestBed } from '@angular/core/testing';

import { ListContentService } from './list-content.service';

describe('ListContentService', () => {
  let service: ListContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
