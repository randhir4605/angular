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

  ngOnChanges(items:SimpleChanges) {
    for(let itemKey in items){
      let item=items[itemKey];
      console.log(item.currentValue);
    }
  }
  
  sendResponse(){
    this.childResponse.emit("Yes Papa, I am fine ? Thank you.");
  }
}