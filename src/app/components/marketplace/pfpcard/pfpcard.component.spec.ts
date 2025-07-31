import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PfpcardComponent } from './pfpcard.component';

describe('PfpcardComponent', () => {
  let component: PfpcardComponent;
  let fixture: ComponentFixture<PfpcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PfpcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PfpcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
