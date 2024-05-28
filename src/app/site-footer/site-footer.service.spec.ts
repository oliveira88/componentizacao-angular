import { TestBed } from '@angular/core/testing';

import { SiteFooterService } from './site-footer.service';

describe('SiteFooterService', () => {
  let service: SiteFooterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiteFooterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
