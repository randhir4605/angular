import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { Feature1RoutingModule } from './feature1-routing.module'; 



@NgModule({
  declarations: [EmployeeComponent],
  imports: [
    CommonModule,
    Feature1RoutingModule
  ]
})
export class Feature1Module { } 
