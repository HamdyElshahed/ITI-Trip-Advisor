import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardbadgComponent } from './cardbadg.component';

describe('CardbadgComponent', () => {
  let component: CardbadgComponent;
  let fixture: ComponentFixture<CardbadgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardbadgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardbadgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
