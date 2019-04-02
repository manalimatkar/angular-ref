import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NestedFormsComponent } from './nested-forms.component';

const routes: Routes = [{
  path: '',
  component: NestedFormsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NestedFormsRoutingModule { }
