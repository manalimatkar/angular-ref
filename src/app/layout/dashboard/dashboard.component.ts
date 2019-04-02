import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { Task, Patient } from '../../shared/models';
import { PatientService, HistoryService } from '../../shared';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  patient:Patient;
  notesHistory:any;
  taskList:Task[];
  taskcount: number;
  activeTask:number = 0;
  taskname:string;
  wfcontext:string;
  
  constructor(private route: ActivatedRoute,
    private patientService: PatientService,
    private notesHistoryService:HistoryService) {}

  ngOnInit() {
    this.route.data.forEach((data: { tasks: Task[] }) => this.taskList = data.tasks);
    //console.log(this.taskList);
    this.taskcount = this.taskList.length;

    this.getCurrentTaskInfo(this.activeTask);   
  }

  getCurrentTaskInfo(currentTask:number){
    
        if(currentTask < this.taskcount){
    
            var activePatient = this.taskList[currentTask].patinetid;
    
            this.patientService.getPatient(activePatient).then(currentPatient => {                  
                      this.patient = currentPatient;
                      // console.log(this.patient);
                    });
    
            this.wfcontext = this.taskList[currentTask].wfcontext;
            this.taskname = this.taskList[currentTask].description;
    
    
            this.notesHistoryService.getHistory( activePatient, this.wfcontext).then(history => {
                // console.log(history.notes);
                this.notesHistory = history.notes;
            })
        }
    
     }
    
    updateActiveTask(value:any){
        console.log(value);
        this.activeTask = value;
        // this.taskList.splice(0,1);
        // TODO: Get information for task, patient, notes and update components to render new information
        this.getCurrentTaskInfo(this.activeTask);
    }

}
