import { TestBed } from '@angular/core/testing';

import { MakeLineService } from './make-line.service';

describe('MakeLineService', () => {
  let service: MakeLineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MakeLineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
