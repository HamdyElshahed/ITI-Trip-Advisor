import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardbtnComponent } from './cardbtn.component';

describe('CardbtnComponent', () => {
  let component: CardbtnComponent;
  let fixture: ComponentFixture<CardbtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardbtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
