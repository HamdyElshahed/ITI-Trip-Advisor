import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cardstyle2Component } from './cardstyle2.component';

describe('Cardstyle2Component', () => {
  let component: Cardstyle2Component;
  let fixture: ComponentFixture<Cardstyle2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cardstyle2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cardstyle2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
