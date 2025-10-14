import { TestBed } from '@angular/core/testing';

import { ArticlesDetailsServiceService } from './articles-details-service.service';

describe('ArticlesDetailsServiceService', () => {
  let service: ArticlesDetailsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticlesDetailsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
