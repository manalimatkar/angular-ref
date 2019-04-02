import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'forms', loadChildren: './forms-example/forms-example.module#FormsExampleModule' },
            // { path: 'dynamic', loadChildren: './dynamic/dynamic.module#DynamicModule' },
            // { path: 'csdemo', loadChildren: './cs-dashboard/cs-dashboard.module#CSDashboardModule' },
            { path: 'dynamicform', loadChildren: './dynamic-form-example/dynamic-form-example.module#DynamicFormExampleModule'},
            { path: 'nestedform', loadChildren: './nested-forms/nested-forms.module#NestedFormsModule'},
            { path: 'todo', loadChildren: './to-do/to-do.module#ToDoModule'}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
