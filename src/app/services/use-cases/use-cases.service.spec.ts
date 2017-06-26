import { TestBed, inject } from '@angular/core/testing';

import { UseCasesService } from './use-cases.service';

describe('UseCasesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UseCasesService]
    });
  });

  it('should be created', inject([UseCasesService], (service: UseCasesService) => {
    expect(service).toBeTruthy();
  }));
});
