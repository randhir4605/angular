import { ParentComponent } from './parent/parent.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';


const routes: Routes = [
  {
    path:'',
    component:ParentComponent
  },
  {
    path:'emp',
    loadChildren:()=>import('./feature1/feature1.module').then(m=>m.Feature1Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
