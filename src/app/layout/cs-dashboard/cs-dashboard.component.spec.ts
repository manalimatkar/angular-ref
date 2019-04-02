import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CSDashboardComponent } from './cs-dashboard.component';

describe('CsDashboardComponent', () => {
  let component: CSDashboardComponent;
  let fixture: ComponentFixture<CSDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CSDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CSDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
