import { TestBed } from '@angular/core/testing';

import { PhoneBrandsService } from './phone-brands.service';

describe('PhoneCategoriesService', () => {
  let service: PhoneBrandsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhoneBrandsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
