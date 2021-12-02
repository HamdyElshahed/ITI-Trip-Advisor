import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedCardListComponent } from './detailed-card-list.component';

describe('DetailedCardListComponent', () => {
  let component: DetailedCardListComponent;
  let fixture: ComponentFixture<DetailedCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedCardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
