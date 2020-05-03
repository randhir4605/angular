import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FeatureService } from '../feature.service';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  private id:string;
  private employee:Employee;

  constructor(public route:ActivatedRoute,public employeeService:FeatureService) { }

  ngOnInit(): void {
    this.route.queryParams.forEach(param=>{
      //parm object is query params key value pair
      console.log(param);
      //can get a particular query param value using dot notation
      console.log(param.id);
      //print all params, I don't know which are those.
      for(let key in param){
        console.log(key);
        console.log(param[key]);

        if("id"===key){
          this.id=param[key];
        }
      }
      console.log(this.id);
      this.employeeService.getEmployeeById(this.id).subscribe((data:Employee)=>{
        console.log(data)
        this.employee=data;
      });
    });
  }  
}
