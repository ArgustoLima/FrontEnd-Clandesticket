import { TestBed } from '@angular/core/testing';

import { ReusoService } from './reuso.service';

describe('ReusoService', () => {
  let service: ReusoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReusoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
