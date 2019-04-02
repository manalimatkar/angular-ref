import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CSDashboardRoutingModule } from './cs-dashboard-routing.module';
import { CSDashboardComponent } from './cs-dashboard.component';

import { CSScriptService } from '../../shared';
import { MessageComponent, OptionSelectComponent } from '../../shared';
import { CallbackComponent } from './callback/callback.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CSDashboardRoutingModule
  ],
  declarations: [ 
    CSDashboardComponent,
    MessageComponent,
    CallbackComponent,
    OptionSelectComponent
  ] ,
  providers:[
    CSScriptService
  ]
})
export class CSDashboardModule { }
