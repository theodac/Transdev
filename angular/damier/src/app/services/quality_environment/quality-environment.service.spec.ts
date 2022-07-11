import { TestBed } from '@angular/core/testing';

import { QualityEnvironmentService } from './quality-environment.service';

describe('QualityRessourcesService', () => {
  let service: QualityEnvironmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QualityEnvironmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
