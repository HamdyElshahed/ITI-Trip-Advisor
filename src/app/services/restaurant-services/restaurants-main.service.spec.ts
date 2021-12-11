import { TestBed } from '@angular/core/testing';

import { RestaurantsMainService } from './restaurants-main.service';

describe('RestaurantsMainServiceService', () => {
  let service: RestaurantsMainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurantsMainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
