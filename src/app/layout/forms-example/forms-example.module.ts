import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormsExampleRoutingModule } from './forms-example-routing.module';
import { FormsExampleComponent } from './forms-example.component';

import { FirstNameComponent, ControlMessagesComponent,  LastnameComponent, MydomainEmailComponent } from '../../shared';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormsExampleRoutingModule
  ],
  declarations: [
    FormsExampleComponent,
    FirstNameComponent,
    ControlMessagesComponent,
    LastnameComponent,
    MydomainEmailComponent
  ]
})
export class FormsExampleModule { }
