import { Component, OnInit } from '@angular/core';
import { FeatureService } from '../feature.service';
import { Employee } from '../employee.model';
import { Feature1RoutingModule } from '../feature1-routing.module';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees:Employee[];
  

  constructor(private employeeService:FeatureService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(){
    this.employeeService.getEmployees().subscribe((data:Employee[])=>{
      console.log(data)
      this.employees=data;
    });
  }

  navigateToDetail(id:string){
    // this.router.navigate(['detail'],{relativeTo:this.route});
    this.router.navigate(['detail'],{relativeTo:this.route,queryParams:{id:id}});
  }
}
