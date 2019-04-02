import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  ControlMessagesComponent,
  EmailComponent,
  FirstNameComponent,
  LastNameComponent,
  PhoneComponent,
  ZipcodeComponent,
  DobComponent,
  OptionSelectComponent,
  CheckboxbtnGroupComponent
} from '../form-components';


@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [
    ControlMessagesComponent,
    DobComponent,
    EmailComponent,
    FirstNameComponent,
    LastNameComponent,
    PhoneComponent,
    ZipcodeComponent,
    OptionSelectComponent,
    CheckboxbtnGroupComponent,
  ],
  exports: [
    ControlMessagesComponent,
    DobComponent,
    EmailComponent,
    FirstNameComponent,
    LastNameComponent,
    PhoneComponent,
    ZipcodeComponent,
    OptionSelectComponent,
    CheckboxbtnGroupComponent
  ]
})

export class FormComponentsModule { }
