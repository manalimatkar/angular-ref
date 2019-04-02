import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicRoutingModule } from './dynamic-routing.module';
import { DynamicComponent } from './dynamic.component';
import { DynamicContentComponentDemo } from './dynamic-content/dynamic-content.component.demo';

import { DynamicChoiceComponent } from './dynamicchoice/dynamicchoice.component';
import { DynamicAbstractComponent } from './dynamicabs.component';
import { DynamicMessageComponent } from './dynamicmessage/dynamicmessage.component';
import { UnknownDynamicComponent } from './unknowndynamic/unknowndynamic.component';
import { DynamicContentComponent } from './dynamic-content/dynamic-content.component';

@NgModule({
  imports: [
    CommonModule,
    DynamicRoutingModule
  ],
  declarations: [
    DynamicComponent,
    DynamicContentComponentDemo,
    DynamicChoiceComponent,
    DynamicMessageComponent,
    UnknownDynamicComponent,
    DynamicContentComponent
  ],
  entryComponents: [
    DynamicMessageComponent, 
    DynamicChoiceComponent,   
    UnknownDynamicComponent,
    UnknownDynamicComponent
    
]
})
export class DynamicModule { }
