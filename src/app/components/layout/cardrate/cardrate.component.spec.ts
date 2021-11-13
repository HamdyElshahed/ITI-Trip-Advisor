import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardrateComponent } from './cardrate.component';

describe('CardrateComponent', () => {
  let component: CardrateComponent;
  let fixture: ComponentFixture<CardrateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardrateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
