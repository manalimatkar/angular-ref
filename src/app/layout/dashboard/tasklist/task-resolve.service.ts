import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Task, TaskService } from '../../../shared';

@Injectable()
export class TasksResolve implements Resolve<any> {

  constructor(private service: TaskService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.service.getTasks().then(tasks => tasks);
  }
}