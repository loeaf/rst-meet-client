import { TestBed } from '@angular/core/testing';

import { TasteRoomContentService } from './taste-room-content.service';

describe('TasteRoomContentService', () => {
  let service: TasteRoomContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TasteRoomContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
