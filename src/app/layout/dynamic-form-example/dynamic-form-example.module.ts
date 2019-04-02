import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormModule } from '../../shared';

import { DynamicFormExampleRoutingModule } from './dynamic-form-example-routing.module';
import { DynamicFormExampleComponent } from './dynamic-form-example.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DynamicFormModule,
    DynamicFormExampleRoutingModule
  ],
  declarations: [DynamicFormExampleComponent]
})
export class DynamicFormExampleModule { }
