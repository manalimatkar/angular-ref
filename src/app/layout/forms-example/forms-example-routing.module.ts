import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsExampleComponent } from './forms-example.component';

const routes: Routes = [
  {
    path: '' ,
    component: FormsExampleComponent,
    pathMatch: 'full',
 },
 {
  path: 'home',
  component: FormsExampleComponent
},
{
  path: 'about',
  component: FormsExampleComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsExampleRoutingModule { }
