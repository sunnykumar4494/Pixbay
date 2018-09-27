import { TestBed, inject } from '@angular/core/testing';

import { PixbayservicesService } from './pixbayservices.service';

describe('PixbayservicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PixbayservicesService]
    });
  });

  it('should be created', inject([PixbayservicesService], (service: PixbayservicesService) => {
    expect(service).toBeTruthy();
  }));
});
