import { TestBed } from '@angular/core/testing';

import { ProductsInfoService } from './products-info.service';

describe('ProductsInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductsInfoService = TestBed.get(ProductsInfoService);
    expect(service).toBeTruthy();
  });
});
