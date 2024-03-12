import { TestBed } from '@angular/core/testing';

import { AuthLecturerService } from './auth-lecturer.service';

describe('AuthLecturerService', () => {
  let service: AuthLecturerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthLecturerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
