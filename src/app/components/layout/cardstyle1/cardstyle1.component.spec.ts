import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cardstyle1Component } from './cardstyle1.component';

describe('Cardstyle1Component', () => {
  let component: Cardstyle1Component;
  let fixture: ComponentFixture<Cardstyle1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cardstyle1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cardstyle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
