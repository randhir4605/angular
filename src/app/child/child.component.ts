import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges {

  @Input()
  childVariable:String;  
  @Input()
  childVariable2:String;

  @Output()
  childResponse=new EventEmitter<String>();

  constructor() { }

  ngOnChanges(changes:SimpleChanges) {
    console.log(changes);
  }
  
  sendResponse(){
    this.childResponse.emit("Yes Papa, I am fine ? Thank you.");
  }
}