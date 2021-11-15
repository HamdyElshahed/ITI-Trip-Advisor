import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationItemComponent } from './vacation-item.component';

describe('VacationItemComponent', () => {
  let component: VacationItemComponent;
  let fixture: ComponentFixture<VacationItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacationItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
