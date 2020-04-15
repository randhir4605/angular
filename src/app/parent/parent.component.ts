import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  parentVariable="Hello Beta! How are You ?";
  response:String;
  constructor() { }

  ngOnInit() {
  }

  getResponse(response:String){
    this.response=response;
  }
}
