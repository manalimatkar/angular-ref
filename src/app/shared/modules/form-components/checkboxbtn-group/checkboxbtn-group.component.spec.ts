import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxbtnGroupComponent } from './checkboxbtn-group.component';

describe('CheckboxbtnGroupComponent', () => {
  let component: CheckboxbtnGroupComponent;
  let fixture: ComponentFixture<CheckboxbtnGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxbtnGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxbtnGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
