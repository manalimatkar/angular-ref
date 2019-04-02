import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { TasksResolve } from './tasklist/task-resolve.service';

const routes: Routes = [
   { 
    path:'' , 
    component: DashboardComponent,
    resolve: {
      tasks: TasksResolve
    }
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
