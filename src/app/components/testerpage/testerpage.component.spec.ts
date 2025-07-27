import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesterpageComponent } from './testerpage.component';

describe('TesterpageComponent', () => {
  let component: TesterpageComponent;
  let fixture: ComponentFixture<TesterpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesterpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TesterpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
