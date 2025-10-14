import { TestBed } from '@angular/core/testing';

import { ArticlesListServiceService } from './articles-list-service.service';

describe('ArticlesListServiceService', () => {
  let service: ArticlesListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticlesListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
