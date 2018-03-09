import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeLengthComponent } from './life-length.component';

describe('LifeLengthComponent', () => {
  let component: LifeLengthComponent;
  let fixture: ComponentFixture<LifeLengthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeLengthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeLengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
