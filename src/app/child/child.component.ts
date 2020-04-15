import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()
  childVariable:String;

  @Output()
  childResponse=new EventEmitter<String>();

  constructor() { }

  ngOnInit() {
  }
  
  sendResponse(){
    this.childResponse.emit("Yes Papa, I am fine ? Thank you.");
  }
}
