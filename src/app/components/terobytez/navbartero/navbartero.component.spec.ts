import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarteroComponent } from './navbartero.component';

describe('NavbarteroComponent', () => {
  let component: NavbarteroComponent;
  let fixture: ComponentFixture<NavbarteroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarteroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarteroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
