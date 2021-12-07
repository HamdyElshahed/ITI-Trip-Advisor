import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconicFeaturesListComponent } from './iconic-features-list.component';

describe('IconicFeaturesListComponent', () => {
  let component: IconicFeaturesListComponent;
  let fixture: ComponentFixture<IconicFeaturesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconicFeaturesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconicFeaturesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
