import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicchoiceComponent } from './dynamicchoice.component';

describe('DynamicchoiceComponent', () => {
  let component: DynamicchoiceComponent;
  let fixture: ComponentFixture<DynamicchoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicchoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicchoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
