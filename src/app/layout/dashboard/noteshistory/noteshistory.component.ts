import { Component, Input, OnInit } from '@angular/core';
import { HistoryService, Note} from '../../../shared';

@Component({
  selector: 'app-noteshistory',
  templateUrl: './noteshistory.component.html',
  styleUrls: ['./noteshistory.component.css']
})
export class NotesHistoryComponent implements OnInit {
  @Input('') notes:Note[];
  constructor() { }

  ngOnInit() {
  }

}
