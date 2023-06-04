import { TestBed } from '@angular/core/testing';

import { LoginTsService } from './login.ts.service';

describe('LoginTsService', () => {
  let service: LoginTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
