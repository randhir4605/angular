import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

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
      }
    });
  }

}
