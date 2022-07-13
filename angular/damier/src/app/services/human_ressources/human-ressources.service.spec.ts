import { TestBed } from '@angular/core/testing';

import { HumanRessourcesService } from './human-ressources.service';

describe('HumanRessourcesService', () => {
  let service: HumanRessourcesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HumanRessourcesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
