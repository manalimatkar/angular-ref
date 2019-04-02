import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CSDashboardComponent } from './cs-dashboard.component';

const routes: Routes = [
  {
    path:'',
    component: CSDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CSDashboardRoutingModule { }
