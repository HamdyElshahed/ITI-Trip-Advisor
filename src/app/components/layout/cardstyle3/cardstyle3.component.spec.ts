import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cardstyle3Component } from './cardstyle3.component';

describe('Cardstyle3Component', () => {
  let component: Cardstyle3Component;
  let fixture: ComponentFixture<Cardstyle3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cardstyle3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cardstyle3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
