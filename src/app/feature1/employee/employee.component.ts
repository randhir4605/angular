import { Component, OnInit } from '@angular/core';
import { FeatureService } from '../feature.service';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeServie:FeatureService) { }

  ngOnInit() {
  }

  getEmployees(){
    this.employeeServie.getEmployees().subscribe((data:Employee)=>{
      console.log(data)
    });
  }

}
