import { TestBed } from '@angular/core/testing';

import { NewBlockImagesService } from './new-block-images.service';

describe('NewBlockImagesService', () => {
  let service: NewBlockImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewBlockImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
