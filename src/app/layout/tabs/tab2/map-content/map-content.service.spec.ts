import { TestBed } from '@angular/core/testing';

import { MapContentService } from './map-content.service';

describe('MapContentService', () => {
  let service: MapContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
