/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CrmService } from './crm.service';

describe('Service: Crm', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrmService]
    });
  });

  it('should ...', inject([CrmService], (service: CrmService) => {
    expect(service).toBeTruthy();
  }));
});
