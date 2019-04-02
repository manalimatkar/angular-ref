import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectdocumentsComponent } from './collectdocuments.component';

describe('CollectdocumentsComponent', () => {
  let component: CollectdocumentsComponent;
  let fixture: ComponentFixture<CollectdocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectdocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectdocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
