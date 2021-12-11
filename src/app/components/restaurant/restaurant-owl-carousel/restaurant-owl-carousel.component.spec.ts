import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantOwlCarouselComponent } from './restaurant-owl-carousel.component';

describe('RestaurantOwlCarouselComponent', () => {
  let component: RestaurantOwlCarouselComponent;
  let fixture: ComponentFixture<RestaurantOwlCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantOwlCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantOwlCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
