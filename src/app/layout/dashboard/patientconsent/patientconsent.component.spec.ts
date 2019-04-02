import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientconsentComponent } from './patientconsent.component';

describe('PatientconsentComponent', () => {
  let component: PatientconsentComponent;
  let fixture: ComponentFixture<PatientconsentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientconsentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientconsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
