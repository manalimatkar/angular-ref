import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstnameComponent } from './firstname.component';

describe('FirstnameComponent', () => {
  let component: FirstnameComponent;
  let fixture: ComponentFixture<FirstnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
