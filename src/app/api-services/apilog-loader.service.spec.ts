import { TestBed } from '@angular/core/testing';

import { APILogLoaderService } from './apilog-loader.service';

describe('APILogLoaderService', () => {
  let service: APILogLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APILogLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
