import { Injectable } from '@angular/core';
import { Task } from '../models/task';

const tasksPromise: Promise<Task[]> = Promise.resolve([
  {
    assignedto: "jack.reacher@yahoo.com",
    wfcontext: "PumpSuppliesCommercial",
    patinetid: "12345", 
    tasknum: 2,
    stepnum: 0,
    description: "Collect Documents",
    status: "inprocess"
  },
  {
    assignedto: "jack.reacher@yahoo.com",
    wfcontext:  "PumpSuppliesCommercial",
    patinetid: "12", 
    tasknum: 6,
    stepnum: 0,
    description: "Patient Consent",
    status: "inprocess"
  },
  {
    assignedto: "jack.reacher@yahoo.com",
    wfcontext: "PumpSuppliesMedicare",
    patinetid: "123", 
    tasknum: 4,
    stepnum: 0,
    description: "Collect Documents",
    status: "inprocess"
  }
]);

@Injectable()
export class TaskService {

  // get all users
  getTasks() {
    return tasksPromise;
  }

}