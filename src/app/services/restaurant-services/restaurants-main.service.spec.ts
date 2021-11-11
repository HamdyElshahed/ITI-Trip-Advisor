import { TestBed } from '@angular/core/testing';

import { RestaurantsMainServiceService } from './restaurants-main.service';

describe('RestaurantsMainServiceService', () => {
  let service: RestaurantsMainServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurantsMainServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
