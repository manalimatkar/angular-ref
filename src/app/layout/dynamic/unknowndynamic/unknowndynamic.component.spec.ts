import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnknowndynamicComponent } from './unknowndynamic.component';

describe('UnknowndynamicComponent', () => {
  let component: UnknowndynamicComponent;
  let fixture: ComponentFixture<UnknowndynamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnknowndynamicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnknowndynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
