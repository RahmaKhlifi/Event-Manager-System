import { TestBed } from '@angular/core/testing';

import { LowerPlaceService } from './lower-place.service';

describe('LowerPlaceService', () => {
  let service: LowerPlaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LowerPlaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
