import { TestBed } from '@angular/core/testing';

import { CustomSelectService } from './custom-select.service';

describe('CustomSelectService', () => {
  let service: CustomSelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomSelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
