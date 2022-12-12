import { TestBed } from '@angular/core/testing';

import { PrductService } from './prduct.service';

describe('PrductService', () => {
  let service: PrductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
