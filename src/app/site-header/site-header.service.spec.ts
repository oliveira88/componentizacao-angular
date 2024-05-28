import { TestBed } from '@angular/core/testing';

import { SiteHeaderService } from './site-header.service';

describe('SiteHeaderService', () => {
  let service: SiteHeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiteHeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
