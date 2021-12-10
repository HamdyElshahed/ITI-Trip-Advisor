import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchrecentitemComponent } from './searchrecentitem.component';

describe('SearchrecentitemComponent', () => {
  let component: SearchrecentitemComponent;
  let fixture: ComponentFixture<SearchrecentitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchrecentitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchrecentitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
