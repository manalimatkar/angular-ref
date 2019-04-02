import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../to-do';
@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table.component.html',
  styleUrls: ['./todo-table.component.css']
})
export class TodoTableComponent implements OnInit {
@Input() todoList : Todo[];
@Output() showForm : EventEmitter<any>;

  constructor() {
    this.showForm = new EventEmitter();
   }

  ngOnInit() {
  }
  setMode(todo:Todo, mode:String){
    this.showForm.emit({
      todo: todo,
      mode: mode
    });  
  }

}
