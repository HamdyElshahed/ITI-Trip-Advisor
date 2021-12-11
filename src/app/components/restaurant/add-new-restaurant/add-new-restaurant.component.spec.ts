import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewRestaurantComponent } from './add-new-restaurant.component';

describe('AddNewRestaurantComponent', () => {
  let component: AddNewRestaurantComponent;
  let fixture: ComponentFixture<AddNewRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewRestaurantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
