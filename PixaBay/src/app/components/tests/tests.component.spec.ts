import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsComponent } from './tests.component';
import { compute } from './tests.component';

describe('TestsComponent', () => {
  let component: TestsComponent;
  let fixture: ComponentFixture<TestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('increment if number is positive', () => {
    var x=compute(10);
    expect(x).toBe(11);
  });
  it(' No increment if number is negative', () => {
    var x=compute(-1);
    expect(x).toBe(0);
  });
});
