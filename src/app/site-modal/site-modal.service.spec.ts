import { TestBed } from '@angular/core/testing';

import { SiteModalService } from './site-modal.service';

describe('SiteModalService', () => {
  let service: SiteModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiteModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
