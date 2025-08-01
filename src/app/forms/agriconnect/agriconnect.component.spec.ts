import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriconnectComponent } from './agriconnect.component';

describe('AgriconnectComponent', () => {
  let component: AgriconnectComponent;
  let fixture: ComponentFixture<AgriconnectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgriconnectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgriconnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
