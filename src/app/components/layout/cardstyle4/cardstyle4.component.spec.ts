import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cardstyle4Component } from './cardstyle4.component';

describe('Cardstyle4Component', () => {
  let component: Cardstyle4Component;
  let fixture: ComponentFixture<Cardstyle4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cardstyle4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cardstyle4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
