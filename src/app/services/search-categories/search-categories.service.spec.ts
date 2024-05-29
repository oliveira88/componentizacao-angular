import { TestBed } from '@angular/core/testing';

import { SearchCategoriesService } from './search-categories.service';

describe('SearchCategoriesService', () => {
  let service: SearchCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
