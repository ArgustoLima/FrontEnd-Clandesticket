import { TestBed } from '@angular/core/testing';

import { ReusoApiUsuarioService } from './reuso-api-usuario.service';

describe('ReusoApiUsuarioServiceTsService', () => {
  let service: ReusoApiUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReusoApiUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
