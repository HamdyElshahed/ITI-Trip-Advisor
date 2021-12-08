import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewDishModalComponent } from './add-new-dish-modal.component';

describe('AddNewDishModalComponent', () => {
  let component: AddNewDishModalComponent;
  let fixture: ComponentFixture<AddNewDishModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewDishModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewDishModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
