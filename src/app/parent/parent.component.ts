import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  parentVariable="Hello Beta! How are You ?";
  parentVariable2="If you need money let me know.";
  response:String;
  constructor() { }

  ngOnInit() {
  }

  saveResponse(response:String){
    this.response=response;
  }
}
