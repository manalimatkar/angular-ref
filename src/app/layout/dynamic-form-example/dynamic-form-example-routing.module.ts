import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicFormExampleComponent } from './dynamic-form-example.component';

const routes: Routes = [{
  path: '',
  component: DynamicFormExampleComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicFormExampleRoutingModule { }
