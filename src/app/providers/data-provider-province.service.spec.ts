import { TestBed } from '@angular/core/testing';

import { DataProviderProvinceService } from './data-provider-province.service';

describe('DataProviderProvinceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataProviderProvinceService = TestBed.get(DataProviderProvinceService);
    expect(service).toBeTruthy();
  });
});
