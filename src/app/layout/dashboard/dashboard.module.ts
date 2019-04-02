import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {DashboardRoutingModule} from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { TaskListComponent } from './tasklist/tasklist.component';
import { PatientInfoComponent } from './patientinfo/patientinfo.component';
import { PatientConsentComponent } from './patientconsent/patientconsent.component';
import { NotesHistoryComponent } from './noteshistory/noteshistory.component';
import { CollectDocumentsComponent } from './collectdocuments/collectdocuments.component';

import { TaskService, PatientService, DocumentsService, HistoryService } from '../../shared'
import { TasksResolve } from './tasklist/task-resolve.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent,
    TaskListComponent,
    PatientInfoComponent,
    PatientConsentComponent,
    NotesHistoryComponent,
    CollectDocumentsComponent
  ],
  providers: [ TaskService, PatientService, DocumentsService, HistoryService,TasksResolve ]
})
export class DashboardModule {}