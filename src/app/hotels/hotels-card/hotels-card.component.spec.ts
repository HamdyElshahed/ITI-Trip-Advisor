import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsCardComponent } from './hotels-card.component';

describe('HotelsCardComponent', () => {
  let component: HotelsCardComponent;
  let fixture: ComponentFixture<HotelsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
