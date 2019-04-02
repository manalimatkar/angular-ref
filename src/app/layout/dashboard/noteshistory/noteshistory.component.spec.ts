import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteshistoryComponent } from './noteshistory.component';

describe('NoteshistoryComponent', () => {
  let component: NoteshistoryComponent;
  let fixture: ComponentFixture<NoteshistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteshistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteshistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
