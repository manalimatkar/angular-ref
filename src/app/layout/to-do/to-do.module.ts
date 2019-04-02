import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ToDoRoutingModule } from './to-do-routing.module';
import { ToDoComponent } from './to-do.component';
import { TodoTableComponent } from './todo-table/todo-table.component';
import { ToDoService } from '../to-do/to-do.service';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ToDoRoutingModule
  ],
  declarations: [
    ToDoComponent,
    TodoTableComponent
  ],
  providers: [ToDoService]
})
export class ToDoModule { }
