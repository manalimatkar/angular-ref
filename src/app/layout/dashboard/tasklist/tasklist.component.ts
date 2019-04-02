import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../../shared';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TaskListComponent implements OnInit {
  @Input('') tasks:Task[];
	@Input('') activeTask: number
  constructor() { }

  ngOnInit(){
		console.log("Current Active Task", this.tasks[this.activeTask].description);
	}

}
