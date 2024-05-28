import { TestBed } from '@angular/core/testing';

import { SiteProductsSectionService } from './site-products-section.service';

describe('SiteProductsSectionService', () => {
  let service: SiteProductsSectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiteProductsSectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
