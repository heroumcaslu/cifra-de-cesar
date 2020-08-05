import { TestBed } from '@angular/core/testing';

import { CifraDeCesarService } from './cifra-de-cesar.service';

describe('CifraDeCesarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CifraDeCesarService = TestBed.get(CifraDeCesarService);
    expect(service).toBeTruthy();
  });
});
