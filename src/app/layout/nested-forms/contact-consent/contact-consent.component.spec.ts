import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactConsentComponent } from './contact-consent.component';

describe('ContactConsentComponent', () => {
  let component: ContactConsentComponent;
  let fixture: ComponentFixture<ContactConsentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactConsentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactConsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
