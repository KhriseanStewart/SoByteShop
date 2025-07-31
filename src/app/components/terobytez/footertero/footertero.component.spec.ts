import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterteroComponent } from './footertero.component';

describe('FooterteroComponent', () => {
  let component: FooterteroComponent;
  let fixture: ComponentFixture<FooterteroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterteroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterteroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
