import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MydomainEmailComponent } from './mydomain-email.component';

describe('MydomainEmailComponent', () => {
  let component: MydomainEmailComponent;
  let fixture: ComponentFixture<MydomainEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MydomainEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MydomainEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
