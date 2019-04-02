import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCollectionComponent } from './button-collection.component';

describe('ButtonCollectionComponent', () => {
  let component: ButtonCollectionComponent;
  let fixture: ComponentFixture<ButtonCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
